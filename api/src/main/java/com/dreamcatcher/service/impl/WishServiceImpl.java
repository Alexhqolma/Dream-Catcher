package com.dreamcatcher.service.impl;

import com.dreamcatcher.dto.mapper.WishMapper;
import com.dreamcatcher.exception.DreamCatcherException;
import com.dreamcatcher.model.Status;
import com.dreamcatcher.model.User;
import com.dreamcatcher.model.Wish;
import com.dreamcatcher.repository.UserRepository;
import com.dreamcatcher.repository.WishRepository;
import com.dreamcatcher.service.WishService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class WishServiceImpl implements WishService {
    private final WishRepository wishRepository;
    private final UserRepository userRepository;
    private final WishMapper wishMapper;
    @Value("${upload.path}")
    private String uploadPath;

    @Override
    public Wish create(Wish wish, MultipartFile file) {
        if (file != null) {
            File uploadDir = new File(uploadPath);
            if (!uploadDir.exists()) {
                uploadDir.mkdir();
            }
            String uuidFile = UUID.randomUUID().toString();
            String resultFileName = uuidFile + "." + file.getOriginalFilename();
            try {
                file.transferTo(new File(uploadPath + "/" + resultFileName));
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            wish.setFileName(resultFileName);
        }
        wish.setCreationDate(LocalDateTime.now());
        wish.setStatus(Status.POSTED);
        return wishRepository.save(wish);
    }

    @Override
    public Wish update(Long id, Wish wish) {
        wish.setId(id);
        return wishRepository.save(wish);
    }

    @Override
    public Wish findById(Long id) {
        return wishRepository.findById(id)
                .orElseThrow(() -> new DreamCatcherException("Can't find wish by id " + id));
    }

    @Override
    public List<Wish> findAll(int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        Page<Wish> list = wishRepository.findAll(pageRequest);
        return list.stream().map(wishMapper::toDto).toList()
                .stream().map(wishMapper::toModel).collect(Collectors.toList());
    }

    @Override
    public List<Wish> findAllByUser(User user) {
        return wishRepository.findAllByUser(user);
    }

    @Override
    public List<Wish> findAllByTakenUser(User user) {
        return wishRepository.findAllByTakenUser(user);
    }

    @Override
    public void delete(Long id) {
        wishRepository.deleteById(id);
    }

    @Override
    public Wish takeWish(Long wishId, Long userId) {
        Wish wish = wishRepository.findById(wishId)
                .orElseThrow(() -> new DreamCatcherException("Can't find wish by id " + wishId));
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new DreamCatcherException("Can't find user by id " + userId));
        wish.setTakenUser(user);
        return wishRepository.save(wish);
    }
}

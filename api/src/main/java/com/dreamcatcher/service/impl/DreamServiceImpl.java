package com.dreamcatcher.service.impl;

import com.dreamcatcher.dto.mapper.DreamMapper;
import com.dreamcatcher.exception.DreamCatcherException;
import com.dreamcatcher.model.Status;
import com.dreamcatcher.model.User;
import com.dreamcatcher.model.Dream;
import com.dreamcatcher.repository.UserRepository;
import com.dreamcatcher.repository.DreamRepository;
import com.dreamcatcher.service.DreamService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DreamServiceImpl implements DreamService {
    private final DreamRepository dreamRepository;
    private final UserRepository userRepository;
    private final DreamMapper dreamMapper;
    @Value("${upload.path}")
    private String uploadPath;

    public DreamServiceImpl(DreamRepository dreamRepository,
                            UserRepository userRepository,
                            DreamMapper dreamMapper) {
        this.dreamRepository = dreamRepository;
        this.userRepository = userRepository;
        this.dreamMapper = dreamMapper;
    }

    @Override
    public Dream create(Dream dream/*, MultipartFile file*/) {
        /*if (file != null) {
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
        }*/
        dream.setCreationDate(LocalDateTime.now());
        dream.setStatus(Status.POSTED);
        return dreamRepository.save(dream);
    }

    @Override
    public Dream update(Long id, Dream dream) {
        dream.setId(id);
        return dreamRepository.save(dream);
    }

    @Override
    public Dream findById(Long id) {
        return dreamRepository.findById(id)
                .orElseThrow(() -> new DreamCatcherException("Can't find dream by id " + id));
    }

    @Override
    public List<Dream> findAll(int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        Page<Dream> list = dreamRepository.findAll(pageRequest);
        return list.stream().map(dreamMapper::toDto).toList()
                .stream().map(dreamMapper::toModel).collect(Collectors.toList());
    }

    @Override
    public List<Dream> findAllByUser(User user) {
        return dreamRepository.findAllByUser(user);
    }

    @Override
    public List<Dream> findAllByHandler(User user) {
        return dreamRepository.findAllByHandler(user);
    }

    @Override
    public void delete(Long id) {
        dreamRepository.deleteById(id);
    }

    @Override
    public Dream takeDream(Long dreamId, Long userId) {
        Dream dream = dreamRepository.findById(dreamId)
                .orElseThrow(() -> new DreamCatcherException("Can't find dream by id " + dreamId));
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new DreamCatcherException("Can't find user by id " + userId));
        dream.setHandler(user);
        return dreamRepository.save(dream);
    }
}

package com.dreamcatcher.service.impl;

import com.dreamcatcher.exception.DreamCatcherException;
import com.dreamcatcher.model.Status;
import com.dreamcatcher.model.User;
import com.dreamcatcher.model.Wish;
import com.dreamcatcher.repository.UserRepository;
import com.dreamcatcher.repository.WishRepository;
import com.dreamcatcher.service.WishService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@AllArgsConstructor
public class WishServiceImpl implements WishService {
    private final WishRepository wishRepository;
    private final UserRepository userRepository;

    @Override
    public Wish create(Wish wish) {
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
    public List<Wish> findAll() {
        return wishRepository.findAll();
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

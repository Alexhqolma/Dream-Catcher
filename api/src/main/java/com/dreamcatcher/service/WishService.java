package com.dreamcatcher.service;

import com.dreamcatcher.model.User;
import com.dreamcatcher.model.Wish;

import java.util.List;

public interface WishService {
    Wish create(Wish wish);

    Wish update(Long id, Wish wish);

    Wish findById(Long id);

    List<Wish> findAll();

    List<Wish> findAllByUser(User user);

    List<Wish> findAllByTakenUser(User user);

    void delete(Long id);

    Wish takeWish(Long wishId, Long userId);
}

package com.dreamcatcher.service;

import com.dreamcatcher.model.User;
import com.dreamcatcher.model.Wish;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface WishService {
    Wish create(Wish wish/*, MultipartFile file*/);

    Wish update(Long id, Wish wish);

    Wish findById(Long id);

    List<Wish> findAll(int page, int size);

    List<Wish> findAllByUser(User user);

    List<Wish> findAllByTakenUser(User user);

    void delete(Long id);

    Wish takeWish(Long wishId, Long userId);
}

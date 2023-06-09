package com.dreamcatcher.service;

import com.dreamcatcher.model.User;
import com.dreamcatcher.model.Dream;

import java.util.List;

public interface DreamService {
    Dream create(Dream dream/*, MultipartFile file*/);

    Dream update(Long id, Dream dream, User user);

    Dream findById(Long id);

    List<Dream> findAll(int page, int size);

    List<Dream> findAllByUser(User user);

    List<Dream> findAllByHandler(User user);

    void delete(Long id, User user);

    Dream takeDream(Long id, User user);

    Dream dropDream(Long id, User user);
}

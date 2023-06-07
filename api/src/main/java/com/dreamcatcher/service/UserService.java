package com.dreamcatcher.service;

import com.dreamcatcher.model.User;

import java.util.List;

public interface UserService {
    User create(User user);

    User findById(Long id);

    List<User> findAll();
}

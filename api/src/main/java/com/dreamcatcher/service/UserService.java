package com.dreamcatcher.service;

import com.dreamcatcher.model.User;

import javax.naming.AuthenticationException;
import java.util.List;

public interface UserService {
    User create(User user);

    User findById(Long id);

    List<User> findAll();

    User login(String email, String password) throws AuthenticationException;
}

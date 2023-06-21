package com.dreamcatcher.service.impl;

import com.dreamcatcher.exception.DreamCatcherException;
import com.dreamcatcher.model.User;
import com.dreamcatcher.repository.UserRepository;
import com.dreamcatcher.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public User create(User user) {
        user.setRole("USER");
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public User findById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new DreamCatcherException("Can't find user by id " + id));
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }
}

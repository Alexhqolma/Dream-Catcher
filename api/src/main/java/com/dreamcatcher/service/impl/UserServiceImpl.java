package com.dreamcatcher.service.impl;

import com.dreamcatcher.exception.DreamCatcherException;
import com.dreamcatcher.model.User;
import com.dreamcatcher.repository.UserRepository;
import com.dreamcatcher.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.naming.AuthenticationException;
import java.util.List;
import java.util.Optional;

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

    @Override
    public User login(String userEmail, String password) throws AuthenticationException {
        Optional<User> user = userRepository.findByEmail(userEmail);
        String encodedPassword = passwordEncoder.encode(password);
        if (user.isEmpty() || user.get().getPassword().equals(encodedPassword)) {
            throw new AuthenticationException("Incorrect username or password!!!");
        }
        return user.orElseThrow(() -> new RuntimeException("Can't find user with user email " + userEmail));
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new DreamCatcherException("Can't find user by email: " + email));
    }
}

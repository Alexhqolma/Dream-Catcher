package com.dreamcatcher.security;

import com.dreamcatcher.exception.DreamCatcherException;
import com.dreamcatcher.model.User;
import com.dreamcatcher.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByName(username);
        return user.map(CustomUserDetails::new)
                .orElseThrow(() -> new DreamCatcherException("Can't find user: " + username));
    }
}

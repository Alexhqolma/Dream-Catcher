package com.dreamcatcher.security;

import com.dreamcatcher.dto.mapper.UserMapper;
import com.dreamcatcher.dto.request.UserRequestDto;
import com.dreamcatcher.dto.response.UserResponseDto;
import com.dreamcatcher.exception.DreamCatcherException;
import com.dreamcatcher.model.User;
import com.dreamcatcher.repository.UserRepository;
import com.dreamcatcher.security.jwt.JwtService;
import com.dreamcatcher.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserMapper userMapper;
    private final UserService userService;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;

    public AuthenticationResponse login(UserResponseDto userResponseDto) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        userResponseDto.getEmail(),
                        userResponseDto.getPassword()
                )
        );
        var user = userRepository.findByEmail(userResponseDto.getEmail())
                .orElseThrow(() ->
                        new DreamCatcherException("Can't find user by email "
                                + userResponseDto.getEmail()));
        var userDetails = org.springframework.security.core.userdetails.User.builder()
                .username(user.getEmail())
                .password(user.getPassword())
                .roles(user.getRole())
                .build();
        var jwtToken = jwtService.generateToken(userDetails);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

    public AuthenticationResponse registration(UserRequestDto userRequestDto) {
        User user = userMapper.toModel(userRequestDto);
        userService.create(user);
        var userDetails = org.springframework.security.core.userdetails.User.builder()
                .username(userRequestDto.getEmail())
                .password(passwordEncoder.encode(userRequestDto.getPassword()))
                .roles("USER")
                .build();
        var jwtToken = jwtService.generateToken(userDetails);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }
}

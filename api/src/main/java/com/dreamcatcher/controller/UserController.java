package com.dreamcatcher.controller;

import com.dreamcatcher.dto.mapper.UserMapper;
import com.dreamcatcher.dto.response.UserResponseDto;
import com.dreamcatcher.service.UserService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
public class UserController {
    private final UserMapper userMapper;
    private final UserService userService;

    @Tag(name = "Users", description = "Get all users from db")
    @GetMapping("/users")
    public List<UserResponseDto> findAllUsers() {
        return userService.findAll()
                .stream()
                .map(userMapper::toDto)
                .collect(Collectors.toList());
    }
}

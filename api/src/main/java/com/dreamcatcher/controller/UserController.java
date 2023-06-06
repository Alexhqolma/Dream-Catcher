package com.dreamcatcher.controller;

import com.dreamcatcher.dto.mapper.UserMapper;
import com.dreamcatcher.dto.request.UserRequestDto;
import com.dreamcatcher.dto.response.UserResponseDto;
import com.dreamcatcher.model.User;
import com.dreamcatcher.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@AllArgsConstructor
public class UserController {
    private final UserMapper userMapper;
    private final UserService userService;

    @PostMapping("/registration")
    public UserResponseDto registration(@Valid @RequestBody UserRequestDto userRequestDto) {
        User user = userMapper.toModel(userRequestDto);
        return userMapper.toDto(userService.create(user));
    }
}

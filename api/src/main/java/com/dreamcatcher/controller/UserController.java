package com.dreamcatcher.controller;

import com.dreamcatcher.dto.mapper.UserMapper;
import com.dreamcatcher.dto.request.UserRequestDto;
import com.dreamcatcher.dto.response.UserResponseDto;
import com.dreamcatcher.model.User;
import com.dreamcatcher.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
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

    @GetMapping("/users")
    public List<UserResponseDto> findAllUsers() {
        return userService.findAll()
                .stream()
                .map(userMapper::toDto)
                .collect(Collectors.toList());
    }
}

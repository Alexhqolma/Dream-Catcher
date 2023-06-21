package com.dreamcatcher.dto.mapper;

import com.dreamcatcher.dto.request.UserRequestDto;
import com.dreamcatcher.dto.response.UserResponseDto;
import com.dreamcatcher.model.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class UserMapper {

    public User toModel(UserRequestDto dto) {
        User user = new User();
        user.setFullName(dto.getFullName());
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
        user.setRole(dto.getRole());
        return user;
    }

    public UserResponseDto toDto(User user) {
        UserResponseDto userResponseDto = new UserResponseDto();
        userResponseDto.setId(user.getId());
        userResponseDto.setFullName(user.getFullName());
        userResponseDto.setEmail(user.getEmail());
        userResponseDto.setPassword(user.getPassword());
        userResponseDto.setRole(user.getRole());
        return userResponseDto;
    }
}

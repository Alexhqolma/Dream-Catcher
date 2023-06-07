package com.dreamcatcher.dto.mapper;

import com.dreamcatcher.dto.request.UserRequestDto;
import com.dreamcatcher.dto.response.UserResponseDto;
import com.dreamcatcher.model.User;
import com.dreamcatcher.model.Wish;
import com.dreamcatcher.service.WishService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import java.util.stream.Collectors;

@Component
@AllArgsConstructor
public class UserMapper {

    public User toModel(UserRequestDto dto) {
        User user = new User();
        user.setName(dto.getName());
        user.setPassword(dto.getPassword());
        user.setRole(dto.getRole());
        return user;
    }

    public UserResponseDto toDto(User user) {
        UserResponseDto userResponseDto = new UserResponseDto();
        userResponseDto.setId(user.getId());
        userResponseDto.setName(user.getName());
        userResponseDto.setPassword(user.getPassword());
        userResponseDto.setRole(user.getRole());
        return userResponseDto;
    }
}

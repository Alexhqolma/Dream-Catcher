package com.dreamcatcher.dto.mapper;

import com.dreamcatcher.dto.request.UserRequestDto;
import com.dreamcatcher.dto.response.UserResponseDto;
import com.dreamcatcher.model.User;
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
        /*user.setTwits(dto.getTwitIds()
                .stream()
                .map(twitService::findById)
                .collect(Collectors.toList()));*/
        return user;
    }

    public UserResponseDto toDto(User user) {
        UserResponseDto userResponseDto = new UserResponseDto();
        userResponseDto.setId(user.getId());
        userResponseDto.setName(user.getName());
        userResponseDto.setPassword(user.getPassword());
        userResponseDto.setRole(user.getRole());
        /*userResponseDto.setTwitIds(user.getTwits()
                .stream()
                .map(Twit::getId)
                .collect(Collectors.toList()));*/
        return userResponseDto;
    }
}

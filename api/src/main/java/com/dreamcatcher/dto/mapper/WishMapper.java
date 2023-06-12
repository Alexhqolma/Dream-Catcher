package com.dreamcatcher.dto.mapper;

import com.dreamcatcher.dto.request.WishRequestDto;
import com.dreamcatcher.dto.response.WishResponseDto;
import com.dreamcatcher.model.Wish;
import com.dreamcatcher.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class WishMapper {
    private final UserService userService;

    public Wish toModel(WishRequestDto dto) {
        Wish wish = new Wish();
        wish.setName(dto.getName());
        wish.setStatus(dto.getStatus());
        wish.setText(dto.getText());
        wish.setUser(userService.findById(dto.getUserId()));
        if (dto.getTakenUserId() != null) {
            wish.setTakenUser(userService.findById(dto.getTakenUserId()));
        }
        /*wish.setMessages(dto.getMessagesId()
                .stream()
                .map(twitService::findById)
                .collect(Collectors.toList()));*/
        return wish;
    }

    public Wish toModel(WishResponseDto dto) {
        Wish wish = new Wish();
        wish.setName(dto.getName());
        wish.setStatus(dto.getStatus());
        wish.setText(dto.getText());
        wish.setUser(userService.findById(dto.getUserId()));
        if (dto.getTakenUserId() != null) {
            wish.setTakenUser(userService.findById(dto.getTakenUserId()));
        }
        /*wish.setMessages(dto.getMessagesId()
                .stream()
                .map(twitService::findById)
                .collect(Collectors.toList()));*/
        return wish;
    }

    public WishResponseDto toDto(Wish wish) {
        WishResponseDto dto = new WishResponseDto();
        dto.setId(wish.getId());
        dto.setName(wish.getName());
        dto.setStatus(wish.getStatus());
        dto.setText(wish.getText());
        dto.setUserId(wish.getUser().getId());
        if (wish.getTakenUser() != null) {
            dto.setTakenUserId(wish.getTakenUser().getId());
        }
        /*userResponseDto.setTwitIds(user.getTwits()
                .stream()
                .map(Twit::getId)
                .collect(Collectors.toList()));*/
        return dto;
    }
}

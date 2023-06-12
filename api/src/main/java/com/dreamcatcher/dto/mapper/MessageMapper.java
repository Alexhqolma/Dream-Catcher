package com.dreamcatcher.dto.mapper;

import com.dreamcatcher.dto.request.MessageRequestDto;
import com.dreamcatcher.dto.response.MessageResponseDto;
import com.dreamcatcher.model.Message;
import com.dreamcatcher.service.UserService;
import com.dreamcatcher.service.WishService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class MessageMapper {
    private final UserService userService;
    private final WishService wishService;

    public Message toModel(MessageRequestDto dto) {
        Message message = new Message();
        message.setText(dto.getText());
        message.setUser(userService.findById(dto.getUserId()));
        message.setCreationDate(dto.getCreationDate());
        message.setWish(wishService.findById(dto.getWishId()));
        return message;
    }

    public MessageResponseDto toDto(Message message) {
        MessageResponseDto dto = new MessageResponseDto();
        dto.setId(message.getId());
        dto.setText(message.getText());
        dto.setUserId(message.getUser().getId());
        dto.setCreationDate(message.getCreationDate());
        dto.setWishId(message.getWish().getId());
        return dto;
    }
}

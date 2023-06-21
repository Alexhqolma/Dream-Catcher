package com.dreamcatcher.dto.mapper;

import com.dreamcatcher.dto.request.MessageRequestDto;
import com.dreamcatcher.dto.response.MessageResponseDto;
import com.dreamcatcher.model.Message;
import com.dreamcatcher.service.UserService;
import com.dreamcatcher.service.DreamService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class MessageMapper {
    private final UserService userService;
    private final DreamService dreamService;

    public Message toModel(MessageRequestDto dto) {
        Message message = new Message();
        message.setBody(dto.getBody());
        message.setUser(userService.findById(dto.getUserId()));
        message.setCreationDate(dto.getCreationDate());
        message.setDream(dreamService.findById(dto.getDreamId()));
        return message;
    }

    public MessageResponseDto toDto(Message message) {
        MessageResponseDto dto = new MessageResponseDto();
        dto.setId(message.getId());
        dto.setBody(message.getBody());
        dto.setUserId(message.getUser().getId());
        dto.setCreationDate(message.getCreationDate());
        dto.setDreamId(message.getDream().getId());
        return dto;
    }
}

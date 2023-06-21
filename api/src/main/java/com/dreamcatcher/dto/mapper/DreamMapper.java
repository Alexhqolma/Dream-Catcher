package com.dreamcatcher.dto.mapper;

import com.dreamcatcher.dto.request.DreamRequestDto;
import com.dreamcatcher.dto.response.DreamResponseDto;
import com.dreamcatcher.model.Dream;
import com.dreamcatcher.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class DreamMapper {
    private final UserService userService;

    public Dream toModel(DreamRequestDto dto) {
        Dream wish = new Dream();
        wish.setTitle(dto.getTitle());
        wish.setStatus(dto.getStatus());
        wish.setBody(dto.getBody());
        wish.setUser(userService.findById(dto.getUserId()));
        if (dto.getHandlerId() != null) {
            wish.setHandler(userService.findById(dto.getHandlerId()));
        }
        wish.setCreationDate(dto.getCreationDate());
        wish.setImageUrl(dto.getImageUrl());
        return wish;
    }

    public Dream toModel(DreamResponseDto dto) {
        Dream wish = new Dream();
        wish.setId(dto.getId());
        wish.setTitle(dto.getTitle());
        wish.setStatus(dto.getStatus());
        wish.setBody(dto.getBody());
        wish.setUser(userService.findById(dto.getUserId()));
        if (dto.getHandlerId() != null) {
            wish.setHandler(userService.findById(dto.getHandlerId()));
        }
        wish.setCreationDate(dto.getCreationDate());
        wish.setImageUrl(dto.getImageUrl());
        return wish;
    }

    public DreamResponseDto toDto(Dream wish) {
        DreamResponseDto dto = new DreamResponseDto();
        dto.setId(wish.getId());
        dto.setTitle(wish.getTitle());
        dto.setStatus(wish.getStatus());
        dto.setBody(wish.getBody());
        dto.setUserId(wish.getUser().getId());
        if (wish.getHandler() != null) {
            dto.setHandlerId(wish.getHandler().getId());
        }
        dto.setCreationDate(wish.getCreationDate());
        dto.setImageUrl(wish.getImageUrl());
        return dto;
    }
}

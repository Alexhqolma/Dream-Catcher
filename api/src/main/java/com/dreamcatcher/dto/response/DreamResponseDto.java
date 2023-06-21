package com.dreamcatcher.dto.response;

import com.dreamcatcher.model.Status;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class DreamResponseDto {
    private Long id;
    private String title;
    private String body;
    private Status status;
    private Long userId;
    private Long handlerId;
    private LocalDateTime creationDate;
    private String imageUrl;
}

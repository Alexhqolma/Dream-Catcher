package com.dreamcatcher.dto.response;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class MessageResponseDto {
    private Long id;
    private String body;
    private Long userId;
    private LocalDateTime creationDate;
    private Long dreamId;
}

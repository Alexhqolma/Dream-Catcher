package com.dreamcatcher.dto.response;

import com.dreamcatcher.model.Status;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class WishResponseDto {
    private Long id;
    private String name;
    private String text;
    private Status status;
    private Long userId;
    private Long takenUserId;
    private LocalDateTime creationDate;
    private String fileName;
}

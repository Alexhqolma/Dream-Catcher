package com.dreamcatcher.dto.request;

import com.dreamcatcher.model.Status;
import lombok.Getter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

@Getter
public class DreamRequestDto {
    @NotNull(message = "Title cannot be empty")
    @Size(min = 2, max = 20, message
            = "Title must be between 2 and 20 characters")
    private String title;
    @Size(min = 2, max = 200, message
            = "Text must be between 2 and 200 characters")
    private String body;
    private Status status;
    private Long userId;
    private Long handlerId;
    private LocalDateTime creationDate;
    private String imageUrl;
}

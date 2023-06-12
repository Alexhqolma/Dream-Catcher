package com.dreamcatcher.dto.request;

import lombok.Getter;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

@Getter
public class MessageRequestDto {
    @NotNull(message = "Message cannot be empty")
    @Size(min = 2, max = 200, message
            = "Message must be between 2 and 200 characters")
    private String text;
    private Long userId;
    private LocalDateTime creationDate;
}

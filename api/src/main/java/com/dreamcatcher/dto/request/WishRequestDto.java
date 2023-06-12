package com.dreamcatcher.dto.request;

import com.dreamcatcher.model.Status;
import lombok.Getter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.List;

@Getter
public class WishRequestDto {
    @NotNull(message = "Name cannot be empty")
    @Size(min = 2, max = 20, message
            = "Name must be between 2 and 20 characters")
    private String name;
    @Size(min = 2, max = 200, message
            = "Text must be between 2 and 200 characters")
    private String text;
    private Status status;
    private Long userId;
    private Long takenUserId;
    private List<Long> messagesId;
    private LocalDateTime creationDate;
    private String fileName;
}

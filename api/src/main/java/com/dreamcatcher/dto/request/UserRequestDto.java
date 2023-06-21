package com.dreamcatcher.dto.request;

import lombok.Getter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
public class UserRequestDto {
    @Size(min = 2, max = 20, message
            = "Name must be between 2 and 20 characters")
    private String fullName;
    @NotNull(message = "Email cannot be empty")
    @Size(min = 2, max = 20, message
            = "Email must be between 2 and 20 characters")
    private String email;
    @NotNull(message = "Password cannot be empty")
    @Size(min = 6, max = 20, message
            = "Password must be between 6 and 20 characters")
    private String password;
    private String role;
}

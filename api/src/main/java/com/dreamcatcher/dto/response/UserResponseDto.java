package com.dreamcatcher.dto.response;

import lombok.Data;

import java.util.List;

@Data
public class UserResponseDto {
    private Long id;
    private String name;
    private String password;
    private String role;
    private List<Long> wishesId;
}

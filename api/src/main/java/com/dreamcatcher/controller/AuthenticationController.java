package com.dreamcatcher.controller;

import com.dreamcatcher.dto.request.UserRequestDto;
import com.dreamcatcher.dto.response.UserResponseDto;
import com.dreamcatcher.security.AuthenticationResponse;
import com.dreamcatcher.security.AuthenticationService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@AllArgsConstructor
@RequestMapping("/auth")
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody @Valid UserResponseDto userResponseDto) {
        return ResponseEntity.ok((authenticationService.login(userResponseDto)));
    }

    @PostMapping("/registration")
    public ResponseEntity<AuthenticationResponse> registration(
            @Valid @RequestBody UserRequestDto userRequestDto) {
        return ResponseEntity.ok((authenticationService.registration(userRequestDto)));
    }
}

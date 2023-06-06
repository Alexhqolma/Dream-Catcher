package com.dreamcatcher.controller;

import com.dreamcatcher.model.User;
import com.dreamcatcher.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/inject")
@AllArgsConstructor
public class InjectController {
    private final UserService userService;

    @GetMapping
    public String injection() {
        User user = new User();
        user.setName("admin");
        user.setPassword("adminadmin");
        userService.create(user);
        return "Ok!";
    }
}

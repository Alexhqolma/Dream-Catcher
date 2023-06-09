package com.dreamcatcher.controller;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class MainController {
    @Tag(name = "Main Page", description = "Get main page")
    @GetMapping
    public String mainPage() {
        return "Main Page";
    }
}

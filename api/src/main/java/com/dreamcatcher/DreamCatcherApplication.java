package com.dreamcatcher;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "Library APIs", version = "1,0", description = "Management"))
public class DreamCatcherApplication {

    public static void main(String[] args) {
        SpringApplication.run(DreamCatcherApplication.class, args);
    }

}

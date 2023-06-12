package com.dreamcatcher.controller;

import com.dreamcatcher.dto.mapper.MessageMapper;
import com.dreamcatcher.dto.request.MessageRequestDto;
import com.dreamcatcher.dto.response.MessageResponseDto;
import com.dreamcatcher.model.Message;
import com.dreamcatcher.model.User;
import com.dreamcatcher.service.MessageService;
import com.dreamcatcher.service.UserService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/messages")
@AllArgsConstructor
public class MessageController {
    private final MessageMapper messageMapper;
    private final MessageService messageService;
    private final UserService userService;

    @Tag(name = "Create Message", description = "Create new message")
    @PostMapping("/create")
    public MessageResponseDto create(@RequestBody MessageRequestDto messageRequestDto) {
        return messageMapper.toDto(messageService.create(messageMapper.toModel(messageRequestDto)));
    }

    @Tag(name = "Find Message", description = "Get message by messageId")
    @GetMapping("/{id}")
    public MessageResponseDto findById(@PathVariable Long id) {
        return messageMapper.toDto(messageService.findById(id));
    }

    @Tag(name = "Find all Messages", description = "Get all messages from db")
    @GetMapping
    public List<MessageResponseDto> findAllMessages() {
        return messageService.findAll()
                .stream()
                .map(messageMapper::toDto)
                .collect(Collectors.toList());
    }

    @Tag(name = "Messages by user", description = "Find all messages created by user. Get them by user id")
    @GetMapping("/user/{id}")
    public List<MessageResponseDto> findAllByUser(@PathVariable Long id) {
        User user = userService.findById(id);
        return messageService.findAllByUser(user)
                .stream()
                .map(messageMapper::toDto)
                .collect(Collectors.toList());
    }

    @Tag(name = "Update Message", description = "Update message")
    @PutMapping("/{id}")
    public MessageResponseDto update(@PathVariable Long id,
                                     @RequestBody MessageRequestDto messageRequestDto) {
        Message message = messageMapper.toModel(messageRequestDto);
        message.setId(id);
        return messageMapper.toDto(messageService.create(message));
    }

    @Tag(name = "Delete Message", description = "Delete message")
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        messageService.delete(id);
    }
}

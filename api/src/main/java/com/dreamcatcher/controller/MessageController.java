package com.dreamcatcher.controller;

import com.dreamcatcher.dto.mapper.MessageMapper;
import com.dreamcatcher.dto.request.MessageRequestDto;
import com.dreamcatcher.dto.response.MessageResponseDto;
import com.dreamcatcher.model.Message;
import com.dreamcatcher.model.User;
import com.dreamcatcher.model.Dream;
import com.dreamcatcher.service.MessageService;
import com.dreamcatcher.service.UserService;
import com.dreamcatcher.service.DreamService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/messages")
@AllArgsConstructor
public class MessageController {
    private final MessageMapper messageMapper;
    private final MessageService messageService;
    private final UserService userService;
    private final DreamService dreamService;

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

    @Tag(name = "Messages by wish", description = "Find all messages created by dream. Get them by wish id")
    @GetMapping("/wish/{id}")
    public List<MessageResponseDto> findAllByDream(@PathVariable Long id) {
        Dream dream = dreamService.findById(id);
        return messageService.findAllByDream(dream)
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

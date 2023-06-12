package com.dreamcatcher.service.impl;

import com.dreamcatcher.exception.DreamCatcherException;
import com.dreamcatcher.model.Message;
import com.dreamcatcher.model.User;
import com.dreamcatcher.repository.MessageRepository;
import com.dreamcatcher.service.MessageService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class MessageServiceImpl implements MessageService {
    private final MessageRepository messageRepository;

    @Override
    public Message create(Message message) {
        message.setCreationDate(LocalDateTime.now());
        return messageRepository.save(message);
    }

    @Override
    public Message findById(Long id) {
        return messageRepository.findById(id)
                .orElseThrow(() -> new DreamCatcherException("Can't find message by id " + id));
    }

    @Override
    public List<Message> findAll() {
        return messageRepository.findAll();
    }

    @Override
    public List<Message> findAllByUser(User user) {
        return messageRepository.findAllByUser(user);
    }

    @Override
    public void delete(Long id) {
        messageRepository.deleteById(id);
    }
}

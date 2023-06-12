package com.dreamcatcher.service;

import com.dreamcatcher.model.Message;
import com.dreamcatcher.model.User;
import java.util.List;

public interface MessageService {
    Message create(Message message);

    Message findById(Long id);

    List<Message> findAll();

    List<Message> findAllByUser(User user);

    void delete(Long id);
}

package com.dreamcatcher.service;

import com.dreamcatcher.model.Message;
import com.dreamcatcher.model.User;
import com.dreamcatcher.model.Wish;

import java.util.List;

public interface MessageService {
    Message create(Message message);

    Message findById(Long id);

    List<Message> findAll();

    List<Message> findAllByUser(User user);

    List<Message> findAllByWish(Wish wish);

    void delete(Long id);
}

package com.dreamcatcher.repository;

import com.dreamcatcher.model.Message;
import com.dreamcatcher.model.User;
import com.dreamcatcher.model.Dream;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {
    List<Message> findAllByUser(User user);

    List<Message> findAllByDream(Dream dream);
}

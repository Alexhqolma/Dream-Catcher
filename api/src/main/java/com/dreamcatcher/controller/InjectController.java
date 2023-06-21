package com.dreamcatcher.controller;

import com.dreamcatcher.model.Message;
import com.dreamcatcher.model.User;
import com.dreamcatcher.model.Dream;
import com.dreamcatcher.service.MessageService;
import com.dreamcatcher.service.UserService;
import com.dreamcatcher.service.DreamService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Injection", description = "Injection of basic info - Ignore this API")
@RestController
@RequestMapping("/inject")
@AllArgsConstructor
public class InjectController {
    private final UserService userService;
    private final DreamService dreamService;
    private final MessageService messageService;

    @GetMapping
    public String injection() {
        User user = new User();
        user.setEmail("admin@admin.com");
        user.setPassword("adminadmin");
        userService.create(user);

        Dream dream = new Dream();
        dream.setTitle("Test Dream");
        dream.setBody("Test Text");
        dream.setUser(user);
        dreamService.create(dream/*, null*/);

        Dream dream2 = new Dream();
        dream2.setTitle("Test2 Dream");
        dream2.setBody("Test2 Text");
        dream2.setUser(user);
        dreamService.create(dream2/*, null*/);

        User user2 = new User();
        user2.setEmail("member@member.com");
        user2.setPassword("adminadmin");
        userService.create(user2);

        Dream dream3 = new Dream();
        dream3.setTitle("Test3 Dream");
        dream3.setBody("Test3 Text");
        dream3.setUser(user2);
        dreamService.create(dream3/*, null*/);

        dream.setHandler(user2);
        dreamService.update(dream.getId(), dream);

        Message message = new Message();
        message.setBody("First message");
        message.setUser(user);
        message.setDream(dream2);
        messageService.create(message);

        Message message2 = new Message();
        message2.setBody("Second message");
        message2.setUser(user2);
        message2.setDream(dream2);
        messageService.create(message2);

        Message message3 = new Message();
        message3.setBody("Third message");
        message3.setUser(user);
        message3.setDream(dream2);
        messageService.create(message3);

        return "Ok!";
    }
}

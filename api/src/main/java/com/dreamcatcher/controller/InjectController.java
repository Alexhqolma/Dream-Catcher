package com.dreamcatcher.controller;

import com.dreamcatcher.model.Message;
import com.dreamcatcher.model.User;
import com.dreamcatcher.model.Wish;
import com.dreamcatcher.service.MessageService;
import com.dreamcatcher.service.UserService;
import com.dreamcatcher.service.WishService;
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
    private final WishService wishService;
    private final MessageService messageService;

    @GetMapping
    public String injection() {
        User user = new User();
        user.setName("admin");
        user.setPassword("adminadmin");
        userService.create(user);

        Wish wish = new Wish();
        wish.setName("Test Wish");
        wish.setText("Test Text");
        wish.setUser(user);
        wishService.create(wish/*, null*/);

        Wish wish2 = new Wish();
        wish2.setName("Test2 Wish");
        wish2.setText("Test2 Text");
        wish2.setUser(user);
        wishService.create(wish2/*, null*/);

        User user2 = new User();
        user2.setName("member");
        user2.setPassword("adminadmin");
        userService.create(user2);

        Wish wish3 = new Wish();
        wish3.setName("Test3 Wish");
        wish3.setText("Test3 Text");
        wish3.setUser(user2);
        wishService.create(wish3/*, null*/);

        wish.setTakenUser(user2);
        wishService.update(wish.getId(), wish);

        Message message = new Message();
        message.setText("First message");
        message.setUser(user);
        message.setWish(wish2);
        messageService.create(message);

        Message message2 = new Message();
        message2.setText("Second message");
        message2.setUser(user2);
        message2.setWish(wish2);
        messageService.create(message2);

        Message message3 = new Message();
        message3.setText("Third message");
        message3.setUser(user);
        message3.setWish(wish2);
        messageService.create(message3);

        return "Ok!";
    }
}

package com.dreamcatcher.controller;

import com.dreamcatcher.dto.mapper.WishMapper;
import com.dreamcatcher.dto.request.WishRequestDto;
import com.dreamcatcher.dto.response.WishResponseDto;
import com.dreamcatcher.model.User;
import com.dreamcatcher.model.Wish;
import com.dreamcatcher.service.UserService;
import com.dreamcatcher.service.WishService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/wishes")
@AllArgsConstructor
public class WishController {
    private final WishMapper wishMapper;
    private final WishService wishService;
    private final UserService userService;

    @Tag(name = "Create Wish", description = "Create new wish")
    @PostMapping("/create")
    public WishResponseDto create(@RequestBody WishRequestDto wishRequestDto) {
        return wishMapper.toDto(wishService.create(wishMapper.toModel(wishRequestDto)));
    }

    @Tag(name = "Find Wish", description = "Get wish by wishId")
    @GetMapping("/{id}")
    public WishResponseDto findById(@PathVariable Long id) {
        return wishMapper.toDto(wishService.findById(id));
    }

    @Tag(name = "Find all Wishes", description = "Get all wishes from db")
    @GetMapping
    public List<WishResponseDto> findAllWishes(@RequestParam(value = "page", defaultValue = "0") int page,
                                               @RequestParam(value = "size", defaultValue = "10") int size) {
        return wishService.findAll(page, size)
                .stream()
                .map(wishMapper::toDto)
                .collect(Collectors.toList());
    }

    @Tag(name = "Wishes by user", description = "Find all wishes created by user. Get them by user id")
    @GetMapping("/user/{id}")
    public List<WishResponseDto> findAllByUser(@PathVariable Long id) {
        User user = userService.findById(id);
        return wishService.findAllByUser(user)
                .stream()
                .map(wishMapper::toDto)
                .collect(Collectors.toList());
    }

    @Tag(name = "Taken Wishes", description = "Get all wishes that user take to realise")
    @GetMapping("/taken-user/{id}")
    public List<WishResponseDto> findAllByTakenUser(@PathVariable Long id) {
        User user = userService.findById(id);
        return wishService.findAllByTakenUser(user)
                .stream()
                .map(wishMapper::toDto)
                .collect(Collectors.toList());
    }

    @Tag(name = "Update Wish", description = "Update wish")
    @PutMapping("/{id}")
    public WishResponseDto update(@PathVariable Long id,
                                  @RequestBody WishRequestDto wishRequestDto) {
        Wish wish = wishMapper.toModel(wishRequestDto);
        return wishMapper.toDto(wishService.update(id, wish));
    }

    @Tag(name = "Delete Wish", description = "Delete wish")
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        wishService.delete(id);
    }

    @Tag(name = "Take Wish", description = "User take wish to realise")
    @PutMapping("/take-wish")
    public WishResponseDto takeWish(@RequestParam("wishId") Long wishId,
                                    @RequestParam("userId") Long userId) {
        return wishMapper.toDto(wishService.takeWish(wishId, userId));
    }
}

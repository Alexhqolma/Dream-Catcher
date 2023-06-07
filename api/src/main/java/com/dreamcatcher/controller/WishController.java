package com.dreamcatcher.controller;

import com.dreamcatcher.dto.mapper.WishMapper;
import com.dreamcatcher.dto.request.WishRequestDto;
import com.dreamcatcher.dto.response.WishResponseDto;
import com.dreamcatcher.model.User;
import com.dreamcatcher.model.Wish;
import com.dreamcatcher.service.UserService;
import com.dreamcatcher.service.WishService;
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

    @PostMapping("/create")
    public WishResponseDto create(@RequestBody WishRequestDto wishRequestDto) {
        return wishMapper.toDto(wishService.create(wishMapper.toModel(wishRequestDto)));
    }

    @GetMapping("/{id}")
    public WishResponseDto findById(@PathVariable Long id) {
        return wishMapper.toDto(wishService.findById(id));
    }

    @GetMapping
    public List<WishResponseDto> findAllWishes() {
        return wishService.findAll()
                .stream()
                .map(wishMapper::toDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/user/{id}")
    public List<WishResponseDto> findAllByUser(@PathVariable Long id) {
        User user = userService.findById(id);
        return wishService.findAllByUser(user)
                .stream()
                .map(wishMapper::toDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/taken-user/{id}")
    public List<WishResponseDto> findAllByTakenUser(@PathVariable Long id) {
        User user = userService.findById(id);
        return wishService.findAllByTakenUser(user)
                .stream()
                .map(wishMapper::toDto)
                .collect(Collectors.toList());
    }

    @PutMapping("/{id}")
    public WishResponseDto update(@PathVariable Long id,
                                  @RequestBody WishRequestDto wishRequestDto) {
        Wish wish = wishMapper.toModel(wishRequestDto);
        return wishMapper.toDto(wishService.update(id, wish));
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        wishService.delete(id);
    }

    @PutMapping("/take-wish")
    public WishResponseDto takeWish(@RequestParam("wishId") Long wishId,
                                    @RequestParam("userId") Long userId) {
        return wishMapper.toDto(wishService.takeWish(wishId, userId));
    }
}

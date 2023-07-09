package com.dreamcatcher.controller;

import com.dreamcatcher.dto.mapper.DreamMapper;
import com.dreamcatcher.dto.request.DreamRequestDto;
import com.dreamcatcher.dto.response.DreamResponseDto;
import com.dreamcatcher.model.User;
import com.dreamcatcher.model.Dream;
import com.dreamcatcher.security.TokenUtil;
import com.dreamcatcher.service.UserService;
import com.dreamcatcher.service.DreamService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/dreams")
@AllArgsConstructor
public class DreamController {
    private final DreamMapper dreamMapper;
    private final DreamService dreamService;
    private final UserService userService;
    private final TokenUtil tokenUtil;

    @Tag(name = "Create Dram", description = "Create new dream")
    @PostMapping("/create")
    public DreamResponseDto create(@RequestBody DreamRequestDto dreamRequestDto,
                                   @RequestHeader HttpHeaders headers/*,
                                  @RequestParam("file") MultipartFile file*/) {
        User user = userService.findByEmail(tokenUtil.getUserName(headers));
        Dream dream = dreamMapper.toModel(dreamRequestDto);
        dream.setUser(user);
        return dreamMapper.toDto(dreamService.create(dream/*, file*/));
    }

    @Tag(name = "Update Dream", description = "Update dream")
    @PatchMapping("/{id}")
    public DreamResponseDto update(@PathVariable Long id,
                                   @RequestBody DreamRequestDto dreamRequestDto,
                                   @RequestHeader HttpHeaders headers) {
        Dream dream = dreamMapper.toModel(dreamRequestDto);
        User user = userService.findByEmail(tokenUtil.getUserName(headers));
        return dreamMapper.toDto(dreamService.update(id, dream, user));
    }

    @Tag(name = "Find Dream", description = "Get dream by dreamId")
    @GetMapping("/{id}")
    public DreamResponseDto findById(@PathVariable Long id) {
        return dreamMapper.toDto(dreamService.findById(id));
    }

    @Tag(name = "Find all Dreams", description = "Get all dreams from db")
    @GetMapping
    public List<DreamResponseDto> findAllDreams(@RequestParam(value = "page", defaultValue = "0") int page,
                                                @RequestParam(value = "size", defaultValue = "10") int size) {
        return dreamService.findAll(page, size)
                .stream()
                .map(dreamMapper::toDto)
                .collect(Collectors.toList());
    }

    @Tag(name = "Dreams by user", description = "Find all dreams created by user. Get them by user id")
    @GetMapping("/user/{id}")
    public List<DreamResponseDto> findAllByUser(@PathVariable Long id) {
        User user = userService.findById(id);
        return dreamService.findAllByUser(user)
                .stream()
                .map(dreamMapper::toDto)
                .collect(Collectors.toList());
    }

    @Tag(name = "Taken Dreams", description = "Get all dreams that user take to realise")
    @GetMapping("/handler")
    public List<DreamResponseDto> findAllByHandler(@RequestHeader HttpHeaders headers) {
        User user = userService.findByEmail(tokenUtil.getUserName(headers));
        return dreamService.findAllByHandler(user)
                .stream()
                .map(dreamMapper::toDto)
                .collect(Collectors.toList());
    }

    @Tag(name = "Delete Dream", description = "Delete dream")
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id,
                       @RequestHeader HttpHeaders headers) {
        User user = userService.findByEmail(tokenUtil.getUserName(headers));
        dreamService.delete(id, user);
    }

    @Tag(name = "Take Dream", description = "User take dream to realise")
    @PutMapping("/take-dream/{id}")
    public DreamResponseDto takeDream(@PathVariable Long id,
                                     @RequestHeader HttpHeaders headers) {
        User user = userService.findByEmail(tokenUtil.getUserName(headers));
        return dreamMapper.toDto(dreamService.takeDream(id, user));
    }

    @Tag(name = "Drop Dream", description = "User drop dream")
    @PutMapping("/drop-dream/{id}")
    public DreamResponseDto dropDream(@PathVariable Long id,
                                      @RequestHeader HttpHeaders headers) {
        User user = userService.findByEmail(tokenUtil.getUserName(headers));
        return dreamMapper.toDto(dreamService.takeDream(id, user));
    }
}

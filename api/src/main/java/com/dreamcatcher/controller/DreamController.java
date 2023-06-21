package com.dreamcatcher.controller;

import com.dreamcatcher.dto.mapper.DreamMapper;
import com.dreamcatcher.dto.request.DreamRequestDto;
import com.dreamcatcher.dto.response.DreamResponseDto;
import com.dreamcatcher.model.User;
import com.dreamcatcher.model.Dream;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/dreams")
@AllArgsConstructor
public class DreamController {
    private final DreamMapper dreamMapper;
    private final DreamService dreamService;
    private final UserService userService;

    @Tag(name = "Create Dram", description = "Create new dream")
    @PostMapping("/create")
    public DreamResponseDto create(@RequestBody DreamRequestDto dreamRequestDto/*,
                                  @RequestParam("file") MultipartFile file*/) {
        Dream wish = dreamMapper.toModel(dreamRequestDto);
        return dreamMapper.toDto(dreamService.create(wish/*, file*/));
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
    @GetMapping("/handler/{id}")
    public List<DreamResponseDto> findAllByHandler(@PathVariable Long id) {
        User user = userService.findById(id);
        return dreamService.findAllByHandler(user)
                .stream()
                .map(dreamMapper::toDto)
                .collect(Collectors.toList());
    }

    @Tag(name = "Update Dream", description = "Update dream")
    @PutMapping("/{id}")
    public DreamResponseDto update(@PathVariable Long id,
                                   @RequestBody DreamRequestDto dreamRequestDto) {
        Dream dream = dreamMapper.toModel(dreamRequestDto);
        return dreamMapper.toDto(dreamService.update(id, dream));
    }

    @Tag(name = "Delete Dream", description = "Delete dream")
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        dreamService.delete(id);
    }

    @Tag(name = "Take Dream", description = "User take dream to realise")
    @PutMapping("/take-dream")
    public DreamResponseDto takeDream(@RequestParam("dreamId") Long dreamId,
                                     @RequestParam("userId") Long userId) {
        return dreamMapper.toDto(dreamService.takeDream(dreamId, userId));
    }
}

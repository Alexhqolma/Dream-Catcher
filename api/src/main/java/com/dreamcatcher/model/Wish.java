package com.dreamcatcher.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "wishes")
public class Wish {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String text;
    @Enumerated(EnumType.STRING)
    private Status status;
    @ManyToMany
    private List<Message> messages;
}

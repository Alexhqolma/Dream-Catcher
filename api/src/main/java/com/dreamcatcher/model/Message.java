package com.dreamcatcher.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "messages")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String body;
    @ManyToOne
    private User user;
    private LocalDateTime creationDate;
    @ManyToOne
    private Dream dream;
}

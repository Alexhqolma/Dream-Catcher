package com.dreamcatcher.repository;

import com.dreamcatcher.model.User;
import com.dreamcatcher.model.Dream;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface DreamRepository extends JpaRepository<Dream, Long> {
    List<Dream> findAllByUser(User user);

    List<Dream> findAllByHandler(User user);

    Page<Dream> findAll(Pageable pageable);
}

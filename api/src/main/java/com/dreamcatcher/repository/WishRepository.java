package com.dreamcatcher.repository;

import com.dreamcatcher.model.User;
import com.dreamcatcher.model.Wish;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface WishRepository extends JpaRepository<Wish, Long> {
    List<Wish> findAllByUser(User user);

    List<Wish> findAllByTakenUser(User user);

    Page<Wish> findAll(Pageable pageable);
}

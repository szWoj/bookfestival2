package com.CodeClan.example.bookfestival.repositories;

import com.CodeClan.example.bookfestival.models.Book;
import com.CodeClan.example.bookfestival.models.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
}

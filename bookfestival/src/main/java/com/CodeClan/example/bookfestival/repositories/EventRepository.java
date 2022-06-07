package com.CodeClan.example.bookfestival.repositories;

import com.CodeClan.example.bookfestival.models.Book;
import com.CodeClan.example.bookfestival.models.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    List<Event> findByPriceEquals(int number);

    List<Event> findByPriceGreaterThanEqual(int number);

    List<Event> findByPriceBetween(int number1, int number2);
}

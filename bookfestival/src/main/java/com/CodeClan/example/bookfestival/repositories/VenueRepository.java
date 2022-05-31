package com.CodeClan.example.bookfestival.repositories;

import com.CodeClan.example.bookfestival.models.Venue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VenueRepository extends JpaRepository<Venue, Long> {
}

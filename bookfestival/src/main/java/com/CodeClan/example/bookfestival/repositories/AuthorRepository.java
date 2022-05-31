package com.CodeClan.example.bookfestival.repositories;

import com.CodeClan.example.bookfestival.models.Author;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {
}

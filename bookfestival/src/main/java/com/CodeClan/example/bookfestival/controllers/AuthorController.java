package com.CodeClan.example.bookfestival.controllers;

import com.CodeClan.example.bookfestival.models.Author;
import com.CodeClan.example.bookfestival.repositories.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Controller
public class AuthorController {

    @Autowired
    AuthorRepository authorRepository;

    @GetMapping("/authors")
    public ResponseEntity<List<Author>> getAllAuthors(){
        return new ResponseEntity<>(authorRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/authors/{id}")
    public ResponseEntity getAnAuthor(@PathVariable Long id){
        return new ResponseEntity<>(authorRepository.findById(id), HttpStatus.OK);
    }
}

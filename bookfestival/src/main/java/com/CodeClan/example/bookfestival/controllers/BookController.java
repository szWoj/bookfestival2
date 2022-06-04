package com.CodeClan.example.bookfestival.controllers;

import com.CodeClan.example.bookfestival.models.Book;
import com.CodeClan.example.bookfestival.models.Event;
import com.CodeClan.example.bookfestival.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BookController {

    @Autowired
    BookRepository bookRepository;

    @GetMapping(value = "/books")
    public ResponseEntity<List<Book>> getAllBooks(){
        return new ResponseEntity<>(bookRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/books/{id}")
    public ResponseEntity getABook(@PathVariable Long id){
        return new ResponseEntity<>(bookRepository.findById(id), HttpStatus.OK);
    }

}

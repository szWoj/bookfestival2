package com.CodeClan.example.bookfestival.controllers;

import com.CodeClan.example.bookfestival.models.Venue;
import com.CodeClan.example.bookfestival.repositories.VenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class VenueController {

    @Autowired
    VenueRepository venueRepository;

    @GetMapping("/venues")
    public ResponseEntity<List<Venue>> getAllVenues(){
        return new ResponseEntity<>(venueRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/venues/{id}")
    public ResponseEntity getAVenue(@PathVariable Long id){
        return new ResponseEntity<>(venueRepository.findById(id), HttpStatus.OK);
    }


}

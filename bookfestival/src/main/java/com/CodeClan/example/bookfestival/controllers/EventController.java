package com.CodeClan.example.bookfestival.controllers;
import com.CodeClan.example.bookfestival.models.Customer;
import com.CodeClan.example.bookfestival.models.Event;
import com.CodeClan.example.bookfestival.repositories.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EventController {

    @Autowired
    EventRepository eventRepository;

//    @GetMapping(value = "/events")
//    public ResponseEntity<List<Event>> getAllEvents(){
//        return new ResponseEntity<>(eventRepository.findAll(), HttpStatus.OK);
//    }

    @GetMapping(value = "/events/{id}")
    public ResponseEntity getAnEvent(@PathVariable Long id){
        return new ResponseEntity<>(eventRepository.findById(id), HttpStatus.OK);
    }

    @GetMapping(value = "/events")
    public ResponseEntity<List<Event>> getEventsByPriceDown(
            @RequestParam(name ="number", required = false)Integer number){
        if(number != null){
            return new ResponseEntity<>(eventRepository.findByPriceEquals(number), HttpStatus.OK);
        }
        return new ResponseEntity<>(eventRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/eventss")
    public ResponseEntity<List<Event>> getEventsByPriceAbove(
            @RequestParam(name ="number", required = false)Integer number){
        if(number != null){
            return new ResponseEntity<>(eventRepository.findByPriceGreaterThanEqual(number), HttpStatus.OK);
        }
        return new ResponseEntity<>(eventRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/eventsBetween")
    public ResponseEntity<List<Event>> getEventsByPriceBetween(
            @RequestParam(name ="number1", required = false)Integer number1,
            @RequestParam(name ="number2", required = false)Integer number2){
        if(number1 != null && number2 != null){
            return new ResponseEntity<>(eventRepository.findByPriceBetween(number1, number2), HttpStatus.OK);
        }
        return new ResponseEntity<>(eventRepository.findAll(), HttpStatus.OK);
    }
}
package com.CodeClan.example.bookfestival.controllers;

import com.CodeClan.example.bookfestival.models.Booking;
import com.CodeClan.example.bookfestival.models.Customer;
import com.CodeClan.example.bookfestival.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookingController {

    @Autowired
    BookingRepository bookingRepository;

    @GetMapping("/bookings/{id}")
    public ResponseEntity getABooking(@PathVariable Long id){
        return new ResponseEntity<>(bookingRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/bookings")
    public ResponseEntity<Booking> postBooking(@RequestBody Booking booking){
        bookingRepository.save(booking);
        return new ResponseEntity<>(booking, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/bookings/{id}")
    public ResponseEntity<Void> deleteBookingById(@PathVariable Long id) {
        try {
            bookingRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } catch (Exception ex){
            return ResponseEntity.notFound().build();
        }
    } // needs to be accesable from calendar page

    @GetMapping(value = "/bookings")
    public ResponseEntity<List<Booking>> mainRoute(@RequestParam(name = "customer", required = false) Long id){
        if(id != null){
            return new ResponseEntity<>(bookingRepository.findByCustomerId(id), HttpStatus.OK);
        }
        return new ResponseEntity<>(bookingRepository.findAll(),HttpStatus.OK);
    }


}

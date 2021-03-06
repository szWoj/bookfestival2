package com.CodeClan.example.bookfestival.controllers;

import com.CodeClan.example.bookfestival.models.Customer;
import com.CodeClan.example.bookfestival.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;

    @GetMapping("/customers")
    public ResponseEntity<List<Customer>> getAllCustomers(){
        return new ResponseEntity<>(customerRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/customers/{id}")
    public ResponseEntity getACustomer(@PathVariable Long id){
        return new ResponseEntity<>(customerRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/customers")
    public ResponseEntity<Customer> postCustomer(@RequestBody Customer customer){
        customerRepository.save(customer);
        return new ResponseEntity<>(customer, HttpStatus.CREATED);
    }

    @GetMapping(value = "/customer")
    public ResponseEntity findCustomerByEmail(@RequestParam(name = "email", required = false) String email,
                                              @RequestParam(name = "phoneNumber", required = false) String phoneNumber,
                                              @RequestParam(name = "name", required = false) String name){
        if(email != null && phoneNumber != null && name != null){
            return new ResponseEntity<>(customerRepository.findByEmailAndPhoneNumberAndName(email, phoneNumber, name), HttpStatus.OK);
        }
        return null;
    }







}

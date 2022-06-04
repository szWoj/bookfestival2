package com.CodeClan.example.bookfestival.repositories;

import com.CodeClan.example.bookfestival.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
//    List<Customer> findByEmail(String email);

    List<Customer> findByEmailAndPhoneNumberAndName(String email, String phoneNumber, String name);
}

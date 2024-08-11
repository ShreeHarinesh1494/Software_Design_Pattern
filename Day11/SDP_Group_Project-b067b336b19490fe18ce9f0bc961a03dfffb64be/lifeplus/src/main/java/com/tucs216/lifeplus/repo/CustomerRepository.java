package com.tucs216.lifeplus.repo;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tucs216.lifeplus.model.Customer;


// @Repository
// public interface CustomerRepository extends JpaRepository<Customer, String> {
//     Optional<Customer> findByEmailAndPassword(String email, String password);
    
// }

@Repository
public interface CustomerRepository extends JpaRepository<Customer, String> {
    Optional<Customer> findByNameAndPassword(String name, String password);
}


package com.tucs216.lifeplus.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.tucs216.lifeplus.model.Customer;
import com.tucs216.lifeplus.repo.CustomerRepository;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    public Customer saveCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public Customer findCustomerByEmail(String email) {
        return customerRepository.findById(email).orElse(null);
    }

    public boolean authenticateCustomer(String name, String password) {
        return customerRepository.findByNameAndPassword(name, password).isPresent();
    }
}

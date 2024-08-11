package com.tucs216.lifeplus.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.tucs216.lifeplus.model.ContactUs;
import com.tucs216.lifeplus.repo.ContactUsRepository;

@Service
public class ContactUsService {
    @Autowired
    private ContactUsRepository contactUsRepository;

    public ContactUs save(ContactUs contactUs) {
        return contactUsRepository.save(contactUs);
    }

    
    public List<ContactUs> getDetails()
    {
        return contactUsRepository.findAll();
    }
}
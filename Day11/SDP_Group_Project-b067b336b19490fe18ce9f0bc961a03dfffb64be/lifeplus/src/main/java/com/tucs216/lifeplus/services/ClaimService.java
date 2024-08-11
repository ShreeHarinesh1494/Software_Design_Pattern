package com.tucs216.lifeplus.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tucs216.lifeplus.model.Claim;
import com.tucs216.lifeplus.repo.ClaimRepository;

@Service
public class ClaimService {
    @Autowired
    private ClaimRepository claimRepository;

    public Claim saveClaim(Claim claim) {
        return claimRepository.save(claim);
    }


    public List<Claim> getAllClaims() {
        return claimRepository.findAll();
    }

    public Claim findClaimById(Long claimNo) {
        return claimRepository.findById(claimNo).orElse(null);
    }


    public Claim fileClaim(Claim claim) {
                return claimRepository.save(claim);
            }
        
            public Claim updateClaimAction(Long claimNo, boolean action) {
                Claim claim = claimRepository.findById(claimNo).orElseThrow();
                claim.setAction(action);
                return claimRepository.save(claim);
            }
}


package com.tucs216.lifeplus.controller;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tucs216.lifeplus.model.Claim;
import com.tucs216.lifeplus.services.ClaimService;


@RestController
@RequestMapping("/claims")
@CrossOrigin(origins = "http://localhost:5173")
public class ClaimController {
    @Autowired
    private ClaimService claimService;

    @PostMapping
    public ResponseEntity<Claim> fileClaim(@RequestBody Claim claim) {
        System.out.println("Received Claim Data: " + claim);
        Claim savedClaim = claimService.fileClaim(claim);
        return new ResponseEntity<>(savedClaim, HttpStatus.CREATED);
    }

    @PutMapping("/{claimNo}/action")
    public ResponseEntity<Claim> updateClaimAction(@PathVariable Long claimNo, @RequestBody Map<String, Boolean> action) {
        Claim updatedClaim = claimService.updateClaimAction(claimNo, action.get("action"));
        return ResponseEntity.ok(updatedClaim);
    }

    @GetMapping
    public ResponseEntity<List<Claim>> getAllClaims() {
    List<Claim> claims = claimService.getAllClaims();
    return ResponseEntity.ok(claims);
}

    @DeleteMapping("/{claimNo}")
    public ResponseEntity<Void> deleteClaim(@PathVariable Long claimNo) {
        claimService.deleteClaim(claimNo);
        return ResponseEntity.noContent().build();
    }
}


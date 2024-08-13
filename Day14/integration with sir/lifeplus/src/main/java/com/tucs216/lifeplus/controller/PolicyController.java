package com.tucs216.lifeplus.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tucs216.lifeplus.model.Policy;
import com.tucs216.lifeplus.services.PolicyService;


@RestController
@RequestMapping("/policies")
@CrossOrigin(origins = "http://localhost:5173")
public class PolicyController {
    @Autowired
    private PolicyService policyService;

    @PostMapping()
    public ResponseEntity<Policy> createPolicy(@RequestBody Policy policy) {
        return ResponseEntity.ok(policyService.savePolicy(policy));
    }

    @GetMapping("all")
    public ResponseEntity<List<Policy>> getAllPolicies() {
        return ResponseEntity.ok(policyService.getAllPolicies());
    }

    @GetMapping("/{policyID}")
    public ResponseEntity<Policy> getPolicyById(@PathVariable Long policyID) {
        return ResponseEntity.ok(policyService.findPolicyById(policyID));
    }

    @DeleteMapping("/{policyID}")
    public ResponseEntity<String> deletePolicyById(@PathVariable Long policyID) {
        policyService.deletePolicyById(policyID);
        return ResponseEntity.ok("Policy deleted successfully");  
    }
    // PolicyController.java

    @GetMapping("/names")
    public ResponseEntity<List<String>> getPolicyNames() {
        List<String> policyNames = policyService.getPolicyNames();
        return ResponseEntity.ok(policyNames);
    }

    @GetMapping("/details/{policyName}")
    public ResponseEntity<Policy> getPolicyDetailsByName(@PathVariable String policyName) {
        Policy policy = policyService.findPolicyByName(policyName);
        if (policy != null) {
            return ResponseEntity.ok(policy);
        } else {
            return ResponseEntity.notFound().build();
        }
}

}


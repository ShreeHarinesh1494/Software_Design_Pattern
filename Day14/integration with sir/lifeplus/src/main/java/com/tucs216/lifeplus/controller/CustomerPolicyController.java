package com.tucs216.lifeplus.controller;



import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.tucs216.lifeplus.model.CustomerPolicy;
import com.tucs216.lifeplus.services.CustomerPolicyService;

@RestController
@RequestMapping("/customer-policies")
@CrossOrigin(origins = "http://localhost:5173")
public class CustomerPolicyController {
    @Autowired
    private CustomerPolicyService customerPolicyService;

    @PostMapping
    public ResponseEntity<CustomerPolicy> createCustomerPolicy(@RequestBody CustomerPolicy customerPolicy) {
        try {
            CustomerPolicy savedCustomerPolicy = customerPolicyService.saveCustomerPolicy(customerPolicy);
            return ResponseEntity.ok(savedCustomerPolicy);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @PutMapping("/{policyNo}/action")
    public ResponseEntity<CustomerPolicy> updatePolicyAction(@PathVariable Long policyNo, @RequestBody Map<String, Boolean> action) {
        CustomerPolicy updatedPolicy = customerPolicyService.updatePolicyAction(policyNo, action.get("action"));
        return ResponseEntity.ok(updatedPolicy);
    }

    @GetMapping("/all")
    public ResponseEntity<List<CustomerPolicy>> getAllCustomerPolicies() {
        List<CustomerPolicy> policies = customerPolicyService.getAllCustomerPolicies();
        return ResponseEntity.ok(policies);
    }

    @DeleteMapping("/{policyNo}")
public ResponseEntity<Void> deleteCustomerPolicy(@PathVariable Long policyNo) {
    customerPolicyService.deletePolicy(policyNo);
    return ResponseEntity.noContent().build();
    }

    @GetMapping("/verified")
    public ResponseEntity<List<CustomerPolicy>> getPoliciesByActionTrue() {
        List<CustomerPolicy> policies = customerPolicyService.getPoliciesByActionTrue();
        return ResponseEntity.ok(policies);
    }
}


package com.tucs216.lifeplus.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import com.tucs216.lifeplus.model.Policy;
import com.tucs216.lifeplus.repo.PolicyRepository;


@Service
public class PolicyService {
    @Autowired
    private PolicyRepository policyRepository;

    
    public Policy savePolicy(Policy policy) 
    {
        return policyRepository.save(policy);
    }


    public List<Policy> getAllPolicies() {
        return policyRepository.findAll();
    }

    public Policy findPolicyById(Long policyID) {
        return policyRepository.findById(policyID).orElse(null);
    }

    public void deletePolicyById(Long policyID) {
        policyRepository.deleteById(policyID);
    }

    public List<String> getPolicyNames() {
    List<Policy> policies = policyRepository.findAll();
    return policies.stream()
                   .map(Policy::getPolicyName)
                   .collect(Collectors.toList());
    }

    public Policy findPolicyByName(String policyName) {
        return policyRepository.findByPolicyName(policyName);
    }

    
}


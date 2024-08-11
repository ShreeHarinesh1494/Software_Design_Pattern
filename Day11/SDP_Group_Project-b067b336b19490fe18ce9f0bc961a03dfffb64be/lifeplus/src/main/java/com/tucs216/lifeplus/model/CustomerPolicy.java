package com.tucs216.lifeplus.model;

import java.math.BigDecimal;
import java.time.LocalDate;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;


@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class CustomerPolicy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long policyNo;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "customer_email", nullable = false)
    private Customer customer;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "policy_id", nullable = false)
    private Policy policy;

    @Column(nullable = false)
    private String policyHolderName;

    @Column(nullable = false)
    private LocalDate dateOfBirth;

    @Column(nullable = false, unique = false)
    private String aadharNo;

    @Column(nullable = false, unique = false)
    private String panCardNo;

    @Column(nullable = false)
    private String phoneNo;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String nomineeName;

    @Column(nullable = false, unique = false)
    private String nomineeAadharNo;

    @Column(nullable = false, unique = false)
    private String nomineePanCardNo;

    @Column(nullable = false)
    private String nomineeRelationship;

    @Column(nullable = false)
    private boolean action = false;

    @OneToMany(mappedBy = "customerPolicy", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Claim> claims;

    @Column(nullable = false)
    private String policyName;

    @Column(nullable = false)
    private int policyDuration;

    @Column(nullable = false)
    private BigDecimal policyAmount;

    // Getters and Setters

    public Long getPolicyNo() {
        return policyNo;
    }

    public void setPolicyNo(Long policyNo) {
        this.policyNo = policyNo;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Policy getPolicy() {
        return policy;
    }

    public void setPolicy(Policy policy) {
        this.policy = policy;
    }

    public String getPolicyHolderName() {
        return policyHolderName;
    }

    public void setPolicyHolderName(String policyHolderName) {
        this.policyHolderName = policyHolderName;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getAadharNo() {
        return aadharNo;
    }

    public void setAadharNo(String aadharNo) {
        this.aadharNo = aadharNo;
    }

    public String getPanCardNo() {
        return panCardNo;
    }

    public void setPanCardNo(String panCardNo) {
        this.panCardNo = panCardNo;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getNomineeName() {
        return nomineeName;
    }

    public void setNomineeName(String nomineeName) {
        this.nomineeName = nomineeName;
    }

    public String getNomineeAadharNo() {
        return nomineeAadharNo;
    }

    public void setNomineeAadharNo(String nomineeAadharNo) {
        this.nomineeAadharNo = nomineeAadharNo;
    }

    public String getNomineePanCardNo() {
        return nomineePanCardNo;
    }

    public void setNomineePanCardNo(String nomineePanCardNo) {
        this.nomineePanCardNo = nomineePanCardNo;
    }

    public String getNomineeRelationship() {
        return nomineeRelationship;
    }

    public void setNomineeRelationship(String nomineeRelationship) {
        this.nomineeRelationship = nomineeRelationship;
    }

    public boolean isAction() {
        return action;
    }

    public void setAction(boolean action) {
        this.action = action;
    }

    public List<Claim> getClaims() {
        return claims;
    }

    public void setClaims(List<Claim> claims) {
        this.claims = claims;
    }

    public String getPolicyName() {
        return policyName;
    }

    public void setPolicyName(String policyName) {
        this.policyName = policyName;
    }

    public int getPolicyDuration() {
        return policyDuration;
    }

    public void setPolicyDuration(int policyDuration) {
        this.policyDuration = policyDuration;
    }

    public BigDecimal getPolicyAmount() {
        return policyAmount;
    }

    public void setPolicyAmount(BigDecimal policyAmount) {
        this.policyAmount = policyAmount;
    }
}
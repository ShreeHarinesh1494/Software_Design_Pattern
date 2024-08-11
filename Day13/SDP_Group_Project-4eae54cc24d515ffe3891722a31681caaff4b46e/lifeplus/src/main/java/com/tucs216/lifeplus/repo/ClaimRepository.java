package com.tucs216.lifeplus.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tucs216.lifeplus.model.Claim;

// @Repository
// public interface ClaimRepository extends JpaRepository<Claim, Long> {
// }

@Repository
public interface ClaimRepository extends JpaRepository<Claim, Long> {
}


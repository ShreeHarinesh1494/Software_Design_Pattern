package com.tucs216.lifeplus.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tucs216.lifeplus.model.Policy;

// @Repository
// public interface PolicyRepository extends JpaRepository<Policy, Long> {
// }

@Repository
public interface PolicyRepository extends JpaRepository<Policy, Long> {

    
}


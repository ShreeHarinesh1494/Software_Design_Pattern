package com.tucs216.lifeplus.repo;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tucs216.lifeplus.model.CustomerPolicy;

// @Repository
// public interface CustomerPolicyRepository extends JpaRepository<CustomerPolicy, Long> {
//     List<CustomerPolicy> findByCustomerEmail(String email);
// }

@Repository
public interface CustomerPolicyRepository extends JpaRepository<CustomerPolicy, Long> {
}


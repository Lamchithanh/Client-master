package com.ecommerce_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ecommerce_project.model.Category;
import com.ecommerce_project.model.Dealhot;

@Repository
public interface DealhotRepository extends JpaRepository<Dealhot, Long> {

	@Query("SELECT d FROM Dealhot d WHERE d.id = :id")
    public   Dealhot findDealhotById(@Param("id") Long id);
	
	@Query("SELECT COUNT(d) FROM Dealhot d")
    long count();
}

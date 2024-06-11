package com.ecommerce_project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ecommerce_project.model.Address;
import com.ecommerce_project.model.Product;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {

	
	 @Query("SELECT a FROM Address a WHERE a.user.id = :id")
	 public  Address findAddressByUserId(@Param("id") Long id);
}

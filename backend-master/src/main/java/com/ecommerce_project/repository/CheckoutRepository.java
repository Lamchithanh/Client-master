package com.ecommerce_project.repository;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ecommerce_project.model.Cart;
import com.ecommerce_project.model.Checkout;

@Repository
public interface CheckoutRepository extends JpaRepository<Checkout, Long> {

//	@Query("SELECT c FROM Checkout c ORDER BY c.id ASC")
//    public Checkout findFirst();
	
	 Checkout findFirstByOrderByIdAsc();
	 
		@Query("SELECT c FROM Checkout c WHERE c.user.id = :userId")
		public Checkout findByUserId(@Param("userId") Long userId);
		
	
}

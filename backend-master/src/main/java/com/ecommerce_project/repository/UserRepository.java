package com.ecommerce_project.repository;

import com.ecommerce_project.model.Cart;
import com.ecommerce_project.model.CartItem;
import com.ecommerce_project.model.Product;
import com.ecommerce_project.model.User;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    public User findByEmail(String email) ;
    
    
	 @Query("SELECT u FROM User u WHERE u.id = :id")
	 public  User findUserById(@Param("id") Long id);

	 @Query("SELECT COUNT(u) FROM User u")
	 long count();
}

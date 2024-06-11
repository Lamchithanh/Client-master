package com.ecommerce_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;
import com.ecommerce_project.model.Order;
import com.ecommerce_project.model.Product;

@Repository
public interface OrderRepository  extends JpaRepository<Order, Long>{
	
	@Query("SELECT o FROM Order o WHERE o.user.id = :userId AND (o.orderStatus = 'PLACED' OR o.orderStatus = 'CONFIRMED' OR o.orderStatus = 'SHIPPED' OR o.orderStatus = 'DELIVERED')")
	public List<Order> getUsersOrders(@Param("userId") Long userId);
	
	 @Query("SELECT o FROM Order o WHERE o.id = :id")
	 public  Order findByOrderId(@Param("id") Long id);
	
	 @Query("SELECT o FROM Order o WHERE o.orderStatus = 'RECEIVED'")
	 public List<Order> findAllReceivedOrders();
	
}

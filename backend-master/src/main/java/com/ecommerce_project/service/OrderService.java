package com.ecommerce_project.service;

import com.ecommerce_project.exception.OrderException;
import com.ecommerce_project.model.Address;
import com.ecommerce_project.model.Order;
import com.ecommerce_project.model.OrderItem;
import com.ecommerce_project.model.User;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public interface OrderService {
	public Order createOrder(User user  );
	public Order findOrderById(Long orderId) throws OrderException;
	public List<Order> usersOrderHistory(Long userId);
	public Order placedOrder(Long orderId) throws OrderException;
	public Order confirmedOrder(Long orderId)throws OrderException;
	public Order shippedOrder(Long orderId) throws OrderException;
	public Order deliveredOrder(Long orderId) throws OrderException;
	public Order cancledOrder(Long orderId) throws OrderException;
	public List<Order> getAllOrders() ; 
	public List<OrderItem> getOrderItems(Long orderId) ; 
	public Order deleteOrder(Long orderId)   throws OrderException; 
	public Order receivedOrder(Long orderId) ; 
	
}

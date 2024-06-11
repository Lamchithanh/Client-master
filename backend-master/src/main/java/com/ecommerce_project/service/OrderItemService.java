package com.ecommerce_project.service;


import org.springframework.stereotype.Service;

import com.ecommerce_project.model.OrderItem;

@Service
public interface OrderItemService {
	
	public OrderItem createOrderItem(OrderItem orderItem) ; 

}

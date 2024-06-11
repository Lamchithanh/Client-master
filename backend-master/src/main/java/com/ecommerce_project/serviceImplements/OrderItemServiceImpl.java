package com.ecommerce_project.serviceImplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce_project.model.OrderItem;
import com.ecommerce_project.repository.OrderItemRepository;
import com.ecommerce_project.service.OrderItemService;

@Service
public class OrderItemServiceImpl implements OrderItemService{
	@Autowired
    private OrderItemRepository orderItemRepository ; 
	@Override
	public OrderItem createOrderItem(OrderItem orderItem) {
		return  orderItemRepository.save(orderItem) ;
	}

}

package com.ecommerce_project.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ecommerce_project.model.Checkout;
import com.ecommerce_project.model.Dealhot;
import com.ecommerce_project.model.User;
import com.ecommerce_project.request.CreateDealhotRequest;

@Service
public interface CheckoutService {
  
	public Checkout sentCartItemToCheckout(Checkout Checkout , List<Long> CartItemIds);
	public Checkout getCheckout(  Long userId);
    public Checkout createCheckout (User user) ; 
    public Checkout findUserCheckout(Long userId);
}

package com.ecommerce_project.serviceImplements;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.apache.catalina.startup.ListenerCreateRule.OptionalListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce_project.model.Cart;
import com.ecommerce_project.model.CartItem;
import com.ecommerce_project.model.Checkout;
import com.ecommerce_project.model.User;
import com.ecommerce_project.repository.CartItemRepository;
import com.ecommerce_project.repository.CheckoutRepository;
import com.ecommerce_project.service.CheckoutService;

@Service
public class CheckoutServiceImpl implements CheckoutService {
	@Autowired
	private CartItemRepository cartItemRepository ; 
	@Autowired
	private CheckoutRepository checkoutRepository ; 

	@Override
	public Checkout sentCartItemToCheckout( Checkout checkout  , List<Long> cartItemIds  ) {
		
		List<CartItem> cartItems = new ArrayList<>();
		for (Long cartItemId : cartItemIds) {
		    Optional<CartItem> optionalCartItem = cartItemRepository.findById(cartItemId);
		    optionalCartItem.ifPresent(cartItem -> {
		        if (!cartItems.contains(cartItem)) {
		            cartItem.setCheckout(checkout);
		            checkout.getCartItems().add(cartItem);
		            cartItems.add(cartItem);
		        
		        }
		    });
		} 
		
		double totalPrice = 0;
		for (CartItem cartItem : cartItems) {
		    totalPrice += cartItem.getTotalPrice(); 
		}
		
		checkout.setTotalPrice(totalPrice);
		 Checkout checkoutSaved = checkoutRepository.save(checkout);		
		 return checkoutSaved ; 
		}
		
	@Override
	public Checkout createCheckout(User user) {
		Checkout checkout = new Checkout() ;
		checkout.setUser(user)  ; 
		 return checkoutRepository.save(checkout);
	}

	

	@Override
	public Checkout getCheckout(Long userId) {
		return checkoutRepository.findByUserId(userId); 
	}
	
	@Override
	public Checkout findUserCheckout(Long userId) {
		return checkoutRepository.findByUserId(userId);
	}

}

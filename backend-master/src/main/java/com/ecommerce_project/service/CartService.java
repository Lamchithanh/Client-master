package com.ecommerce_project.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ecommerce_project.exception.ProductException;
import com.ecommerce_project.model.Cart;
import com.ecommerce_project.model.CartItem;
import com.ecommerce_project.model.User;
import com.ecommerce_project.request.AddItemRequest;

@Service
public interface CartService {
	public Cart createCart(User user);
	public String addCartItem(Long userId  ,AddItemRequest req) throws ProductException;
	public Cart findUserCart(Long userId);
	List<CartItem> findCartItemsByCart(Long cartId);
	public Cart updateTotalPrice(Long cartItemId);
}

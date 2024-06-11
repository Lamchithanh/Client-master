package com.ecommerce_project.service;


import org.springframework.stereotype.Service;

import com.ecommerce_project.exception.CartItemException;
import com.ecommerce_project.exception.UserException;
import com.ecommerce_project.model.Cart;
import com.ecommerce_project.model.CartItem;
import com.ecommerce_project.model.Product;

@Service
public interface CartItemService {
//	public CartItem createCartItem(CartItem cartItem);
	public CartItem updateCartItem( Long userId ,  Long id  ,CartItem cartItem)throws CartItemException , UserException;
//	public CartItem isCartItemExist(   Cart cart , Product product  ,String size  ,Long userId );
	public void removeCartItem(Long userId  ,Long cartItemId) throws CartItemException ,UserException;
	public CartItem findCartItemById(Long cartItemId)throws CartItemException;
	public Cart updateTotalDicountedPrice(Long userId);
	public void updateTotalPriceCartByCheckStatus(Long userId);
}

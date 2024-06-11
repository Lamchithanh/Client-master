package com.ecommerce_project.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ecommerce_project.service.ProductService;
import com.ecommerce_project.service.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce_project.exception.CartItemException;
import com.ecommerce_project.exception.OrderException;
import com.ecommerce_project.exception.ProductException;
import com.ecommerce_project.exception.UserException;
import com.ecommerce_project.model.Cart;
import com.ecommerce_project.model.CartItem;
import com.ecommerce_project.model.Order;
import com.ecommerce_project.model.Product;
import com.ecommerce_project.model.User;
import com.ecommerce_project.request.AddItemRequest;
import com.ecommerce_project.request.CreateProductRequest;
import com.ecommerce_project.service.CartItemService;
import com.ecommerce_project.service.CartService;
import com.ecommerce_project.service.OrderService;
//import io.swagger.v3.oas.annotations.Operation;
import com.ecommerce_project.response.ApiResponse;


@RestController
@RequestMapping("/api/cartItems")
public class CartItemController {
	@Autowired
	private CartItemService cartItemService ; 
	@Autowired
	private UserService userService ; 
	@Autowired
	private CartService cartService ;
	
	

	@DeleteMapping("/{cartItemId}")
	public ResponseEntity<ApiResponse> deleteCartItem(@PathVariable Long cartItemId ,
	@RequestHeader("Authorization") String jwt) throws UserException  ,CartItemException{
	User user=userService.findUserProfileByJwt(jwt);
	cartItemService.removeCartItem(user.getId()  ,cartItemId);
	ApiResponse res=new ApiResponse();
	res.setMessage("delete item from cart");
	res.setStatus(true);
	return new ResponseEntity<>(res ,HttpStatus.OK);
	}
	
	

	@PutMapping("/{cartItemId}")
	public ResponseEntity<CartItem> updateCartItem(
	@RequestBody CartItem cartItem ,
	@PathVariable Long cartItemId , 
	@RequestHeader("Authorization") String jwt) throws UserException , CartItemException{
	User user=userService.findUserProfileByJwt(jwt);
	CartItem updatedCartItem=cartItemService.updateCartItem(user.getId()  ,cartItemId  ,cartItem);
	return new ResponseEntity<>(updatedCartItem ,HttpStatus.OK);
	}
	@PutMapping("/update/{cartItemId}")
	public ResponseEntity<ApiResponse> updateTotalPrice(@PathVariable Long cartItemId ) throws UserException{
		
		cartService.updateTotalPrice(cartItemId);
		
		ApiResponse res=new ApiResponse();
		res.setMessage("Update Total Discounted Price Success");
		res.setStatus(true);
		return new ResponseEntity<>(res ,HttpStatus.OK);
		}
}


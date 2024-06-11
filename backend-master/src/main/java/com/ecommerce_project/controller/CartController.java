package com.ecommerce_project.controller;

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
import com.ecommerce_project.service.CartService;
import com.ecommerce_project.service.OrderService;
//import io.swagger.v3.oas.annotations.Operation;
import com.ecommerce_project.response.ApiResponse;

//@Tag(name="Cart Management"description= "find user cart add item to cart")
@RestController
@RequestMapping("api/cart")
public class CartController {
	@Autowired
    private CartService cartService ; 
	@Autowired
	private UserService userService ; 
	
//	@Operation(description = "find cart by user id")
	@GetMapping("/get")
	public ResponseEntity<Cart>findUserCart(@RequestHeader("Authorization")String jwt) throws UserException{
	User user=userService.findUserProfileByJwt(jwt);
	Cart cart=cartService.findUserCart(user.getId());
	return new ResponseEntity<Cart>(cart ,HttpStatus.OK);
	}

//	@GetMapping("/")
//	public ResponseEntity<Cart>findUserCart(@RequestHeader("Authorization")String jwt) throws UserException{
//	User user=userService.findUserProfileByJwt(jwt);
//	Cart cart=cartService.findUserCart(user.getId());
//	
//	return new ResponseEntity<Cart>(cart ,HttpStatus.OK);
//	}
	
	  @GetMapping("/items")
	    public ResponseEntity<List<CartItem>> findCartItemsByCart(  @RequestHeader("Authorization")String jwt) throws UserException{
		  User user=userService.findUserProfileByJwt(jwt);  
		  Cart cart=cartService.findUserCart(user.getId());
		  Long cartId =  cart.getId(); 
		  List<CartItem> cartItems = cartService.findCartItemsByCart(cartId);
	        return new ResponseEntity<>(cartItems, HttpStatus.OK);
	    }

//	@Operation(description = "add item to cart")
	@PutMapping("/add")
	public ResponseEntity<ApiResponse>addItemToCart(@RequestBody AddItemRequest req ,
	@RequestHeader("Authorization")String jwt) throws UserException  ,ProductException{
		
	User user=userService.findUserProfileByJwt(jwt);
	cartService.addCartItem(user.getId()  , req);
	ApiResponse res=new ApiResponse();
	res.setMessage("item added to cart");
	res.setStatus(true);
	return new ResponseEntity<>(res ,HttpStatus.OK);
	}
	
	
	
	
	
	
}

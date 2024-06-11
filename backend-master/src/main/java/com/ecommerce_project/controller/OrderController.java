package com.ecommerce_project.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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
import com.ecommerce_project.model.Address;
import com.ecommerce_project.model.Cart;
import com.ecommerce_project.model.Order;
import com.ecommerce_project.model.OrderItem;
import com.ecommerce_project.model.Product;
import com.ecommerce_project.model.User;
import com.ecommerce_project.request.AddItemRequest;
import com.ecommerce_project.request.CreateProductRequest;
import com.ecommerce_project.response.ApiResponse;
import com.ecommerce_project.service.CartService;
import com.ecommerce_project.service.OrderService;
import com.ecommerce_project.service.UserService;

//import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
	@Autowired
	private OrderService orderService;
	@Autowired
	private UserService userService;
	
	@PostMapping("/")
	public ResponseEntity<Order>createOrder(@RequestHeader("Authorization") String jwt) throws UserException{
	User user=userService.findUserProfileByJwt(jwt);
	Order order=orderService.createOrder(user);
	return new ResponseEntity<Order>(order ,HttpStatus.CREATED);
		
	}
	@GetMapping("/user")
	public ResponseEntity<List<Order>>usersOrderHistory(
	@RequestHeader("Authorization") String jwt) throws UserException{
	User user=userService.findUserProfileByJwt(jwt);
	List<Order> orders =orderService.usersOrderHistory(user.getId());
	return new ResponseEntity<>(orders ,HttpStatus.CREATED);
	}
	@GetMapping("/get")
	public ResponseEntity<List<Order>> getAllOrders() throws UserException{
	List<Order> orders =orderService.getAllOrders();
	return new ResponseEntity<List<Order>>(orders ,HttpStatus.CREATED);
	}
	@GetMapping("/get/orderItems/{orderId}")
	public ResponseEntity<List<OrderItem>> getOrderItems(@PathVariable Long orderId) throws UserException{
	List<OrderItem> orderItems =orderService.getOrderItems(orderId);
	return new ResponseEntity<List<OrderItem>>(orderItems ,HttpStatus.CREATED);
	}
	@PutMapping("/orderStatus/{orderId}")
	public ResponseEntity<Order> receivedOrder(@PathVariable Long orderId) throws UserException{
	  Order order = orderService.receivedOrder(orderId);
	return new ResponseEntity<Order>(order ,HttpStatus.CREATED);
	}
	@GetMapping("/{Id}")
	public ResponseEntity<Order>findOrderById(
	@PathVariable("Id") Long orderId ,
	@RequestHeader("Authorization") String jwt) throws UserException  ,OrderException{
	User user=userService.findUserProfileByJwt(jwt);
	Order order =orderService.findOrderById(orderId);
	return new ResponseEntity<>(order ,HttpStatus.ACCEPTED);
	}
}

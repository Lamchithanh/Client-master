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
import com.ecommerce_project.model.Rating;
import com.ecommerce_project.model.Order;
import com.ecommerce_project.model.Product;
import com.ecommerce_project.model.User;
import com.ecommerce_project.request.AddItemRequest;
import com.ecommerce_project.request.CreateProductRequest;
import com.ecommerce_project.request.RatingRequest;
import com.ecommerce_project.service.CartService;
import com.ecommerce_project.service.OrderService;
import com.ecommerce_project.service.RatingService;
import com.ecommerce_project.service.UserService;

//import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("api/ratings")
public class RatingController {
	@Autowired
	private UserService userService;
	@Autowired
	private RatingService ratingService;
	
	@PostMapping("/create")
	public ResponseEntity<Rating> createRating(@RequestBody RatingRequest req ,
	@RequestHeader("Authorization") String jwt) throws UserException , ProductException{
	User user=userService.findUserProfileByJwt(jwt);
	Rating rating=ratingService.createRating(req  ,user);
	return new ResponseEntity<Rating>(rating ,HttpStatus.CREATED);
	}
	@GetMapping("/product/{productId}")
	public ResponseEntity<List<Rating>> getProductsRating(@PathVariable Long productId , 
	@RequestHeader("Authorization") String jwt) throws UserException ,ProductException{
	User user=userService.findUserProfileByJwt(jwt);
	List<Rating> ratings=ratingService.getProdutsRating(productId);
	return new ResponseEntity<>(ratings ,HttpStatus.CREATED);
	}

}

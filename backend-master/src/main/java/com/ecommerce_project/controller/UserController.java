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
import com.ecommerce_project.model.Review;
import com.ecommerce_project.model.Order;
import com.ecommerce_project.model.Product;
import com.ecommerce_project.model.User;
import com.ecommerce_project.repository.AddressRepository;
import com.ecommerce_project.request.AddItemRequest;
import com.ecommerce_project.request.CreateProductRequest;
import com.ecommerce_project.request.RatingRequest;
import com.ecommerce_project.request.ReviewRequest;
import com.ecommerce_project.response.ApiResponse;
import com.ecommerce_project.service.CartService;
import com.ecommerce_project.service.OrderService;
import com.ecommerce_project.service.RatingService;
import com.ecommerce_project.service.ReviewService;
import com.ecommerce_project.service.UserService;

//import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/api/users")
public class UserController {

	@Autowired
	private UserService userService ; 
	@Autowired
	private AddressRepository addressRepository ; 
	
	@GetMapping("/profile")
	public ResponseEntity<User> getUserProfileHandler(@RequestHeader("Authorization" )String jwt)throws UserException{
	User user=userService.findUserProfileByJwt(jwt);
	return new ResponseEntity<User>(user ,HttpStatus.ACCEPTED);
}
	@GetMapping("/address")
	public ResponseEntity<Address> getAddress(@RequestHeader("Authorization" )String jwt)throws UserException{
	User user=userService.findUserProfileByJwt(jwt);
	   Long userId  =  user.getId() ; 
	Address address =     addressRepository.findAddressByUserId(userId) ; 
	return new ResponseEntity<Address>(address ,HttpStatus.ACCEPTED);
}
	@GetMapping("/address/{userId}")
	public ResponseEntity<Address> getAddressByUserId( @PathVariable Long userId)throws UserException{
	Address address =     addressRepository.findAddressByUserId(userId) ; 
	return new ResponseEntity<Address>(address ,HttpStatus.ACCEPTED);
}
	
	@PostMapping("/address")
	public ResponseEntity<Address>createOrder(@RequestBody Address shippingAddress , 
	@RequestHeader("Authorization") String jwt) throws UserException{
	User user=userService.findUserProfileByJwt(jwt);
	Address address =     userService.createAddress(user  ,shippingAddress);
	return new ResponseEntity<Address>(address ,HttpStatus.CREATED);
		
	}

	@PostMapping("/update")
	public ResponseEntity<ApiResponse> updateUserProfileHandler(@RequestHeader("Authorization" )String jwt ,@RequestBody User userNew )throws UserException{
	
			
		
	User userDB=userService.findUserProfileByJwt(jwt);
     userService.updateUserProfile(userDB, userNew);
     ApiResponse res = new ApiResponse();
	    res.setMessage("User Profile đã được update");
	    res.setStatus(true);
	    return new ResponseEntity<>(res, HttpStatus.CREATED);
}
	@GetMapping("/")
	public ResponseEntity<List<User>> getAllUser()throws UserException{

		List<User> userList = userService.getAllUser();
	return new ResponseEntity<List<User>>(userList ,HttpStatus.ACCEPTED);
}
	
	@GetMapping("/get/{userId}")
	public ResponseEntity<User> getAllUserById(@PathVariable Long userId)throws UserException{
		User user =   userService.findUserById(userId);
	return new ResponseEntity<User>(user ,HttpStatus.ACCEPTED);
}
}

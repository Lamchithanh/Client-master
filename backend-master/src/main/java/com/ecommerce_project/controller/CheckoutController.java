package com.ecommerce_project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce_project.exception.UserException;
import com.ecommerce_project.model.Brand;
import com.ecommerce_project.model.Checkout;
import com.ecommerce_project.model.User;
import com.ecommerce_project.request.CreateBrandRequest;
import com.ecommerce_project.service.CheckoutService;
import com.ecommerce_project.service.UserService;

@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {
	@Autowired
	private CheckoutService checkoutService ; 
	@Autowired
	private UserService userService ; 

	@PostMapping
    public ResponseEntity<Checkout> sentCartItemToCheckout(@RequestParam("cartItemIds") List<Long> cartItemIds ,  @RequestHeader("Authorization")String jwt)throws UserException {
		User user=userService.findUserProfileByJwt(jwt);
		Checkout checkout = checkoutService.findUserCheckout(user.getId()); 
		Checkout checkoutNew =  checkoutService.sentCartItemToCheckout(checkout , cartItemIds); 
	    return new ResponseEntity<>(checkoutNew, HttpStatus.OK);
    }
	
	@GetMapping("/get")
    public ResponseEntity<Checkout> getCheckout(@RequestHeader("Authorization")String jwt) throws UserException{
		User user=userService.findUserProfileByJwt(jwt);
	    Long userId	= user.getId();
        Checkout checkout =  checkoutService.getCheckout(userId); 
	    return new ResponseEntity<Checkout>(checkout, HttpStatus.OK);
    }
	
	
}

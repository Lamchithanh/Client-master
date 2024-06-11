package com.ecommerce_project.controller;

import com.ecommerce_project.config.JwtProvider;
import com.ecommerce_project.exception.UserException;
import com.ecommerce_project.model.Cart;
import com.ecommerce_project.model.Checkout;
import com.ecommerce_project.model.User;
import com.ecommerce_project.repository.UserRepository;
import com.ecommerce_project.request.LoginRequest;
import com.ecommerce_project.response.AuthResponse;
import com.ecommerce_project.service.CartService;
import com.ecommerce_project.service.CheckoutService;
import com.ecommerce_project.serviceImplements.CustomerUserServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import java.util.List;


@RestController
@RequestMapping("/auth")
public class AuthController {

     @Autowired
     private UserRepository userRepository ;
     @Autowired
     private JwtProvider jwtProvider ;
     @Autowired
     private PasswordEncoder passwordEncoder ;
     @Autowired
     private CustomerUserServiceImpl customerUserService ;
     @Autowired
     private CartService cartService ; 
     @Autowired
     private CheckoutService checkoutService ; 
     
  

     @GetMapping("/students")
     public List<User> getAllUser(){
    	 List<User> users  = userRepository.findAll() ; 
    	 return users ; 
    	 
     }
     
    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandle(@RequestBody User user) throws UserException{
         User  isEmailExist= userRepository.findByEmail(user.getEmail());
         if (isEmailExist != null){
             throw new UserException("Email is Already used with Another Account ");
         }    
         User createUser = new User();
         createUser.setEmail(user.getEmail());
         createUser.setPassword(passwordEncoder.encode(user.getPassword())); 
         createUser.setFullName(user.getFullName());
         createUser.setPhoneNumber(user.getPhoneNumber());
         User savedUser = userRepository.save(createUser);
         Cart cart = cartService.createCart(savedUser);
         Checkout checkout = checkoutService.createCheckout(savedUser);
         User updatedUser = userRepository.save(savedUser);
        Authentication authentication = new UsernamePasswordAuthenticationToken(savedUser.getEmail() , savedUser.getPassword()  ) ;
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtProvider.generateToken(authentication);
        AuthResponse authResponse = new AuthResponse();
        authResponse.setJwt(token);
        authResponse.setMessage("Signup Success");
       return new ResponseEntity<>(authResponse , HttpStatus.CREATED);
    }
    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> loginUserHandler(@RequestBody LoginRequest loginRequest){
       String username = loginRequest.getEmail() ;
     String password = loginRequest.getPassword() ;
       Authentication authentication = authenticate(username, password);
       SecurityContextHolder.getContext().setAuthentication(authentication);
       String token = jwtProvider.generateToken(authentication);
       AuthResponse authResponse = new AuthResponse();
       authResponse.setJwt(token);
       authResponse.setMessage("Signin Success");
       return new ResponseEntity<AuthResponse>(authResponse , HttpStatus.CREATED);
    }
 
    private Authentication authenticate(String username, String password) {
        UserDetails userDetails= customerUserService.loadUserByUsername(username);
        if(userDetails==null)
        {
            throw new BadCredentialsException("Invalid Username");

        }
        if (!passwordEncoder.matches(password , userDetails.getPassword())){
            throw new BadCredentialsException("Invalid Password...");
        }

        return new UsernamePasswordAuthenticationToken(userDetails, null , userDetails.getAuthorities()) ;
    }

}



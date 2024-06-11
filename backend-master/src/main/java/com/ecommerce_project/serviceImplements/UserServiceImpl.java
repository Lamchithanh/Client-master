package com.ecommerce_project.serviceImplements;

import java.util.List;
import java.util.Optional;

import org.aspectj.internal.lang.annotation.ajcDeclareAnnotation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce_project.config.JwtProvider;
import com.ecommerce_project.exception.UserException;
import com.ecommerce_project.model.Address;
import com.ecommerce_project.model.CartItem;
import com.ecommerce_project.model.Checkout;
import com.ecommerce_project.model.User;
import com.ecommerce_project.repository.AddressRepository;
import com.ecommerce_project.repository.CartItemRepository;
import com.ecommerce_project.repository.CheckoutRepository;
import com.ecommerce_project.repository.UserRepository;
import com.ecommerce_project.service.ProductService;
import com.ecommerce_project.service.UserService;

@Service
public class UserServiceImpl  implements UserService{
    @Autowired
	private UserRepository userRepository ; 
    @Autowired
	private JwtProvider jwtProvider ; 
    @Autowired
    private AddressRepository addressRepository ; 
    @Autowired
    private CheckoutRepository checkoutRepository ; 
    @Autowired
    private CartItemRepository cartItemRepository ;
   
	@Override
	public User findUserById(Long userId) throws UserException {
		Optional<User>user=userRepository.findById(userId);
		if(user.isPresent()) {
		return user.get();
		}
		throw new UserException("user not found with id : " + userId);
	}
	

	@Override
	public User findUserProfileByJwt(String jwt) throws UserException {
		String email=jwtProvider.getEmailFromToken(jwt);
		User user=userRepository.findByEmail(email);
		if(user == null) {
		throw new UserException("user not found with email "+email);
		}
		return user ; 
	}

	@Override
	public User updateUserProfile(User userDB, User userNew) throws UserException {
		
            userDB.setFullName(userNew.getFullName());
            userDB.setPhoneNumber(userNew.getPhoneNumber());
            userDB.setDateOfBirthDateTime(userNew.getDateOfBirthDateTime());
            userDB.setGender(userNew.getGender());
           User userUpdated = userRepository.save(userDB) ; 
		return userUpdated;
	}

	@Override
	public List<User> getAllUser() throws UserException {
	    List<User> userList =  userRepository.findAll();
		return userList;
	}

	@Override
	public User getAllUser(Long userId) throws UserException {
		 
		return userRepository.findUserById(userId);
	}


	@Override
	public Address createAddress(User user, Address shippingAddress) throws UserException {
		Long userId =   user.getId();
		Address address =  addressRepository.findAddressByUserId(userId);
		
		
		
		 if (address == null) {
		        address = new Address();
		    }
		address.setCity(shippingAddress.getCity());
		address.setDistrict(shippingAddress.getDistrict());
		address.setFullName(shippingAddress.getFullName());
		address.setPhoneNumber(shippingAddress.getPhoneNumber());
		address.setStreetAddress(shippingAddress.getStreetAddress());
		address.setWard(shippingAddress.getWard());
		address.setUser(user);
//		user.setAddress(address);
		userRepository.save(user);
		Address addressSavedAddress =    addressRepository.save(address);
		
		
		
		return addressSavedAddress;
	}
	
	

}

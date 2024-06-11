package com.ecommerce_project.serviceImplements;

import java.awt.geom.QuadCurve2D;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce_project.exception.CartItemException;
import com.ecommerce_project.exception.UserException;
import com.ecommerce_project.model.Cart;
import com.ecommerce_project.model.CartItem;
import com.ecommerce_project.model.Checkout;
import com.ecommerce_project.model.Product;
import com.ecommerce_project.model.User;
import com.ecommerce_project.repository.CartItemRepository;
import com.ecommerce_project.repository.CartRepository;
import com.ecommerce_project.repository.CheckoutRepository;
import com.ecommerce_project.service.CartItemService;
import com.ecommerce_project.service.CartService;
import com.ecommerce_project.service.UserService;

@Service
public class CartItemServiceImpl implements CartItemService{
    @Autowired
	private CartItemRepository cartItemRepository  ;
    @Autowired
	private UserService userService ; 
    @Autowired
	private CartRepository cartRepository ;  
    @Autowired
    private CheckoutRepository checkoutRepository; 


	@Override
	public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException {
		CartItem item=findCartItemById(id);
	    
		User user=userService.findUserById(item.getUserId());
		if(user.getId().equals(userId)) {
		item.setQuantity(cartItem.getQuantity());	
		Double totalPrice = item.getQuantity() * item.getProduct().getDiscountedPrice(); 
		item.setTotalPrice(totalPrice); 
		String itemCheckStatus = 	item.getCheckStatus(); 
	    if("false".equals(itemCheckStatus)) {
	    	return cartItemRepository.save(item);
	    } else if("true".equals(itemCheckStatus)) {	    	   
	    	   updateTotalPriceCartByCheckStatus( userId);
	   		return cartItemRepository.save(item);
	    }
	
	 
		}
		
		   return cartItemRepository.save(item);
	}




	@Override
	public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException {
		CartItem cartItem=findCartItemById(cartItemId);
		Cart cart = cartRepository.findByUserId(userId);
		User user=userService.findUserById(cartItem.getUserId());
		User reqUser=userService.findUserById(userId);
		if(user.getId().equals(reqUser.getId())) {
		cartItemRepository.deleteById(cartItemId);

		updateTotalPriceCartByCheckStatus(userId) ; 
		
		
		
		} else {
			throw new UserException("you can't remove another users item");
		}
		
		 List<CartItem> cartItems = cartItemRepository.findAllByCart(cart);
	     int numberOfCartItems = cartItems.size();
	    cart.setTotalItem(numberOfCartItems);
	    cartRepository.save(cart);
	    
//	     tính tổng lại tiền checkout dựa trên cartItem của checkout 
	     Checkout checkout = checkoutRepository.findByUserId(userId);
	     List<CartItem> cartItems2 =  checkout.getCartItems();
	     double totalPrice = 0;
			for (CartItem cartItemss : cartItems2) {
			    totalPrice += cartItemss.getTotalPrice(); 
			}
			checkout.setTotalPrice(totalPrice);
			 checkoutRepository.save(checkout);		
		
	}

	@Override
	public CartItem findCartItemById(Long cartItemId) throws CartItemException {
		Optional<CartItem> opt =cartItemRepository.findById(cartItemId);
		if(opt.isPresent()) {
		
		return opt.get();
		}
		throw new CartItemException("cartItem not found with id : "+cartItemId);
	}

	@Override
	public Cart updateTotalDicountedPrice(Long userId) {
		Cart cart =  cartRepository.findByUserId(userId);
		
		List<CartItem> cartItems = cartItemRepository.findAllByCartId(cart);
    	double totalDiscountedPrice = 0;
    	for (CartItem cartItemss : cartItems) {
    		double itemTotalPrice = cartItemss.getTotalPrice();
    		    totalDiscountedPrice += itemTotalPrice;
    	}
    	cart.setTotalDiscountedPrice(totalDiscountedPrice);
		 return cartRepository.save(cart);
	}
	
	@Override
	public void updateTotalPriceCartByCheckStatus(Long userId) {
		Cart cart =  cartRepository.findByUserId(userId);
		Long cartId = cart.getId();
 	   String checkStatusTrue = "true";
			 List<CartItem> cartItems = cartItemRepository.findCartItemByCheckStatus(checkStatusTrue ,cartId);
			 double totalDiscountedPrice = 0;
		    	for (CartItem cartItemss : cartItems) {
		    		double itemTotalPrice = cartItemss.getTotalPrice();
		    		    totalDiscountedPrice += itemTotalPrice;
		    	}
		    	cart.setTotalDiscountedPrice(totalDiscountedPrice);
		    	cartRepository.save(cart);
	}
	
	
}

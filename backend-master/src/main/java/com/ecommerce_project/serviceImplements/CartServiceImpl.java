package com.ecommerce_project.serviceImplements;

import java.text.BreakIterator;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce_project.exception.ProductException;
import com.ecommerce_project.model.Cart;
import com.ecommerce_project.model.CartItem;
import com.ecommerce_project.model.Product;
import com.ecommerce_project.model.User;
import com.ecommerce_project.repository.CartItemRepository;
import com.ecommerce_project.repository.CartRepository;
import com.ecommerce_project.request.AddItemRequest;
import com.ecommerce_project.service.CartItemService;
import com.ecommerce_project.service.CartService;
import com.ecommerce_project.service.ProductService;

@Service
public class CartServiceImpl implements CartService{

	@Autowired
	private CartRepository cartRepository ; 
	@Autowired
	private CartItemService cartItemService ; 
	 @Autowired
	 private ProductService productService ; 
	 @Autowired
	 private CartItemRepository cartItemRepository ; 
	@Override
	public Cart createCart(User user) {
		Cart cart = new Cart() ;
		cart.setUser(user)  ; 
		 return cartRepository.save(cart);
	}

	@Override
	public String addCartItem(Long userId, AddItemRequest req) throws ProductException {
		
		Cart cart = cartRepository.findByUserId(userId) ;
        Product product=productService.findProductById(req.getProductId());
//        Color
        CartItem isCartItemColorPresent=cartItemRepository.isCartItemExist(cart , product  , req.getSize() , req.getColor(), userId);
		if(isCartItemColorPresent == null) {
		CartItem cartItem=new CartItem();
		
		cartItem.setProduct(product);
		cartItem.setCart(cart);
		cartItem.setQuantity(req.getQuantity());
		cartItem.setUserId(userId);
		cartItem.setCheckStatus("false");
		cartItem.setPrice(product.getDiscountedPrice());
		cartItem.setSize(req.getSize());
		cartItem.setColor(req.getColor());
		
		Double price = req.getQuantity() * product.getDiscountedPrice();
		cartItem.setPrice(product.getDiscountedPrice());
		cartItem.setTotalPrice(price); 
	    
	    
		cartItemRepository.save(cartItem);
		
		} 
		else {
			Optional<CartItem> optionalCartItem = cartItemRepository.findById(isCartItemColorPresent.getId());
			CartItem cartItem = optionalCartItem.get();

			
			cartItem.setQuantity( cartItem.getQuantity() + req.getQuantity());
			cartItem.setPrice(product.getDiscountedPrice()); 
			
	    	Double totalPrice=req.getQuantity()*product.getDiscountedPrice();
	    	cartItem.setTotalPrice(cartItem.getTotalPrice() + totalPrice );

		     
	        cartItemRepository.save(cartItem);
		  
		}
//        Size
//		CartItem isCartItemSizePresent=cartItemRepository.isCartItemSizeExist(cart , product , req.getSize() , userId);
//		if(isCartItemSizePresent == null) {
//		CartItem cartItem=new CartItem();
//		
//		cartItem.setProduct(product);
//		cartItem.setCart(cart);
//		cartItem.setQuantity(req.getQuantity());
//		cartItem.setUserId(userId);
//		cartItem.setCheckStatus("false");
//		cartItem.setPrice(product.getDiscountedPrice());
//		cartItem.setSize(req.getSize());
//		cartItem.setColor(req.getColor());
//		
//		Double price = req.getQuantity() * product.getDiscountedPrice();
//		cartItem.setPrice(product.getDiscountedPrice());
//		cartItem.setTotalPrice(price); 
//	    
//	    
//		cartItemRepository.save(cartItem);
//		
//		} 
//		else {
//			Optional<CartItem> optionalCartItem = cartItemRepository.findById(isCartItemSizePresent.getId());
//			CartItem cartItem = optionalCartItem.get();
//
//			
//			cartItem.setQuantity( cartItem.getQuantity() + req.getQuantity());
//			cartItem.setPrice(product.getDiscountedPrice()); 
//			
//	    	Double totalPrice=req.getQuantity()*product.getDiscountedPrice();
//	    	cartItem.setTotalPrice(cartItem.getTotalPrice() + totalPrice );
//
//		     
//	        cartItemRepository.save(cartItem);
//		  
//		}
		
//		cập nhật lại quantity cartItem của cart
		List<CartItem> cartItems = cartItemRepository.findAllByCart(cart);
	     int numberOfCartItems = cartItems.size();
	    cart.setTotalItem(numberOfCartItems);

	    cartRepository.save(cart);
		return "Item Add To Cart";
	}
		
	@Override
	public Cart findUserCart(Long userId) {
		return cartRepository.findByUserId(userId);
	}
	 @Override
	    public List<CartItem> findCartItemsByCart(Long cartId) {
	        Cart cart = cartRepository.findByCartId(cartId);
	        return cartItemRepository.findAllByCart(cart);
	    }

	@Override
	public Cart updateTotalPrice(Long cartItemId) {
		 CartItem cartItem = cartItemRepository.findCartItemByCartItemId(cartItemId);
		  Cart cart =  cartItem.getCart();
		  Long cartId=  cart.getId();
		  
		  if( cartItem.getCheckStatus().equals("true")) {
			     cartItem.setCheckStatus("false");
			     CartItem savedCartItem = cartItemRepository.save(cartItem);
			     String checkStatusTrue = "true";
				 List<CartItem> cartItems = cartItemRepository.findCartItemByCheckStatus(checkStatusTrue ,cartId);
				 double totalDiscountedPrice = 0;
			    	for (CartItem cartItemss : cartItems) {
			    		double itemTotalPrice = cartItemss.getTotalPrice();
			    		    totalDiscountedPrice += itemTotalPrice;
			    	}
			    	cart.setTotalDiscountedPrice(totalDiscountedPrice);
			    	 Cart savedCart = cartRepository.save(cart);
		  }else if(cartItem.getCheckStatus().equals("false")) {
			      cartItem.setCheckStatus("true");
			      CartItem savedCartItem = cartItemRepository.save(cartItem);
			      String checkStatusTrue = "true";
				    List<CartItem> cartItems = cartItemRepository.findCartItemByCheckStatus(checkStatusTrue ,cartId);
				 double totalDiscountedPrice = 0;
			    	for (CartItem cartItemss : cartItems) {
			    		double itemTotalPrice = cartItemss.getTotalPrice();
			    		    totalDiscountedPrice += itemTotalPrice;
			    	}
			    	

			    	cart.setTotalDiscountedPrice(totalDiscountedPrice);
			       Cart savedCart = 	cartRepository.save(cart);
			     
			    	 
		  }
		
		  return  null;
	}

	
	 
	 

}

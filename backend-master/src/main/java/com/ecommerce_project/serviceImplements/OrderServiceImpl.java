package com.ecommerce_project.serviceImplements;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.hibernate.engine.query.spi.OrdinalParameterDescriptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.ecommerce_project.exception.OrderException;
import com.ecommerce_project.model.Address;
import com.ecommerce_project.model.Cart;
import com.ecommerce_project.model.CartItem;
import com.ecommerce_project.model.Checkout;
import com.ecommerce_project.model.DataStatistics;
import com.ecommerce_project.model.Order;
import com.ecommerce_project.model.OrderItem;
import com.ecommerce_project.model.User;
import com.ecommerce_project.repository.AddressRepository;
import com.ecommerce_project.repository.CartItemRepository;
import com.ecommerce_project.repository.CartRepository;
import com.ecommerce_project.repository.CheckoutRepository;
import com.ecommerce_project.repository.DataStatisticsRepository;
import com.ecommerce_project.repository.OrderItemRepository;
import com.ecommerce_project.repository.OrderRepository;
import com.ecommerce_project.repository.UserRepository;
import com.ecommerce_project.response.ApiResponse;
import com.ecommerce_project.service.CartService;
import com.ecommerce_project.service.OrderItemService;
import com.ecommerce_project.service.OrderService;


@Service
public class OrderServiceImpl implements OrderService {
  
	@Autowired
	private OrderRepository orderRepository ; 
	@Autowired
	private CartService cartService ;
	@Autowired
	private AddressRepository addressRepository ; 
	@Autowired
	private UserRepository userRepository ; 
	@Autowired
	private OrderItemRepository orderItemRepository ; 
	@Autowired
	private CheckoutRepository checkoutRepository ; 
	@Autowired
	private CartItemRepository cartItemRepository;
	@Autowired
	private DataStatisticsRepository dataStatisticsRepository ;
	@Autowired
	private CartRepository cartRepository ; 
	@Override
	public Order createOrder(User user) {
		Order order = new Order();
	    Long userId = user.getId() ; 
		Checkout checkout = checkoutRepository.findByUserId(userId);
		Address address   = addressRepository.findAddressByUserId(userId);
		List<OrderItem> orderItems = new ArrayList<>();
		List<CartItem> cartItems =  checkout.getCartItems();
		
		 for (CartItem cartItem : cartItems) {
		        OrderItem orderItem = new OrderItem();
		        orderItem.setProduct(cartItem.getProduct());
		        orderItem.setSize(cartItem.getSize());
		        orderItem.setQuantity(cartItem.getQuantity());
		        orderItem.setTotalPrice(cartItem.getTotalPrice());
		        orderItem.setPrice(cartItem.getPrice());
		        orderItem.setUserId(cartItem.getUserId());
		        orderItem.setCheckStatus(cartItem.getCheckStatus());
		        orderItem.setOrder(order); 
		        orderItems.add(orderItem);
		    }
	
		order.setOrderItems(orderItems);
		order.setTotalItem( cartItems.size());
		order.setUser(user);
		order.setTotalPrice(checkout.getTotalPrice());   
//		order.setAddress(address); 
		order.setTotalPrice(checkout.getTotalPrice());  
		order.setOrderStatus("PENDING");
		
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		LocalDateTime localDateTime = timestamp.toLocalDateTime();
//		 LocalDateTime orderDate = LocalDateTime.now();
//		 java.sql.Date sqlDate = java.sql.Date.valueOf(orderDate.toLocalDate());
		order.setCreateAt(localDateTime);
		order.setDeliveryDate(localDateTime.plusDays(4));
		
		checkout.getCartItems().clear(); 
		checkout.setTotalPrice(0);
	    checkoutRepository.save(checkout); 
	     
//	    cập nhật lại cart của user khi create Order success
	    Cart cart =  cartRepository.findByUserId(userId);
 	   Long cartId = cart.getId();
 	   String checkStatusTrue = "true";
			 List<CartItem> cartItemss = cartItemRepository.findCartItemByCheckStatus(checkStatusTrue ,cartId);
			 double totalDiscountedPrice = 0;
		    	for (CartItem cartItemsss : cartItems) {
		    		double itemTotalPrice = cartItemsss.getTotalPrice();
		    		    totalDiscountedPrice += itemTotalPrice;
		    	}
		    	cart.setTotalDiscountedPrice(totalDiscountedPrice);
		    	
	    
//		    	lấy ra tất cả cartItems trong cart của user tính tổng lại 
		    	List<CartItem> items = cartItemRepository.findAllByCart(cart);
			     int numberOfCartItems = items.size();
			    cart.setTotalItem(numberOfCartItems);

			    cartRepository.save(cart);
		return orderRepository.save(order);
	}

	@Override
	public Order findOrderById(Long orderId) throws OrderException {
		Optional<Order> opt=orderRepository.findById(orderId);
		if(opt.isPresent()) {
		return opt.get();
		}
		throw new OrderException("order not exist with id "+orderId);
	}

	@Override
	public List<Order> usersOrderHistory(Long userId) {
		List<Order> orders=orderRepository.getUsersOrders(userId);
		return orders;
	}

	@Override
	public Order placedOrder(Long orderId) throws OrderException {
//		Order order=findOrderById(orderId);
//		order.setOrderStatus("PLACED");
//		order.getPaymentDetails().setStatus("COMPLETED");
//		return order;
		return null ; 
	}

	@Override
	public Order confirmedOrder(Long orderId) throws OrderException {
		Order order=findOrderById(orderId);
		order.setOrderStatus("CONFIRMED");
		return orderRepository.save(order);
	}

	@Override
	public Order shippedOrder(Long orderId) throws OrderException {
		Order order=findOrderById(orderId);
		order.setOrderStatus("SHIPPED");
		return orderRepository.save(order);
	}

	@Override
	public Order deliveredOrder(Long orderId) throws OrderException {
		Order order=findOrderById(orderId);
		order.setOrderStatus("DELIVERED");
		return orderRepository.save(order);
	}

	@Override
	public Order cancledOrder(Long orderId) throws OrderException {
		Order order=findOrderById(orderId);
		order.setOrderStatus("CANCELLED");
		return orderRepository.save(order);
	}

	@Override
	public List<Order> getAllOrders()  {
		 return orderRepository.findAll(); 	
	}

	@Override
	public Order deleteOrder(Long orderId) throws OrderException{
		Optional<Order> Order = orderRepository.findById(orderId);
        if (!Order.isPresent()) {
            throw new OrderException("Order not found");
        }
        Order order=findOrderById(orderId);
        orderRepository.delete(order);
        return null ; 
	}

	@Override
	public Order receivedOrder(Long orderId) {
	   Order order = orderRepository.findByOrderId(orderId);
	   if(order.getOrderStatus().equals("RECEIVED")) {
		   return null; 
		  	   } else if(order.getOrderStatus().equals("PENDING")){
		  		 order.setOrderStatus("RECEIVED");
		  	   }
		 Order orderSaved =  orderRepository.save(order);
	  return orderSaved ; 

	}

	@Override
	public List<OrderItem> getOrderItems(Long orderId) {
	   Order order = orderRepository.findByOrderId(orderId);
	    List<OrderItem> orderItems  =  order.getOrderItems();
		return orderItems;
	}
	

}

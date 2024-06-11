package com.ecommerce_project.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@RequiredArgsConstructor
@AllArgsConstructor
@Table(name = "Orders")
public class Order {
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;


	
	@OneToMany(mappedBy="order" , cascade = CascadeType.ALL)
	private List<OrderItem>orderItems=new ArrayList<>();
	
	
	private LocalDateTime deliveryDate;


	 
//		@ManyToOne
//	    @JoinColumn(name = "address_id")
//	    private Address address;
	
//	 @OneToOne
//	    @JoinColumn(name = "address_id", unique = true)
//	    private Address address;
	
//	@ManyToOne
//    @JoinColumn(name = "address_id")
//    private Address address;



		
		@ManyToOne
	    @JoinColumn(name = "user_id")
	    private User user;

	
	private double totalPrice;


	private String orderStatus;
	private int totalItem;
	private LocalDateTime createAt;
	
	

	
}

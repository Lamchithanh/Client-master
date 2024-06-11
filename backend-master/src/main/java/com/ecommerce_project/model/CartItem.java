package com.ecommerce_project.model;

import java.util.Set;


import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@RequiredArgsConstructor
@AllArgsConstructor
@Table(name = "CartItem")
public class CartItem {
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@JsonIgnore
	@ManyToOne
	private Cart cart;
	
	@ManyToOne
	private Product product;
	private String size;
	private Integer quantity;
	private double totalPrice;
	private double price ; 
	private Long userId ; 
	private String checkStatus;
	private String color ; 
	
//	 @ManyToOne
//	    @JoinColumn(name = "checkout_id")
//	    private Checkout checkout;
	
    @JsonIgnore
  @ManyToOne
@JoinColumn(name = "checkout_id")
  private Checkout checkout ;
    
//    @ManyToOne
//    @JoinColumn(name = "order_id")
//    private Order order;
	
	 
	
}

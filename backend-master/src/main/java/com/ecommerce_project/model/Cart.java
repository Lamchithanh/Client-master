package com.ecommerce_project.model;

import java.time.LocalDateTime;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@RequiredArgsConstructor
@AllArgsConstructor
@Table(name = "Cart")
public class Cart {
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
//	@OneToOne( cascade = CascadeType.ALL)
//	@JoinColumn(name = "user_id"  ,nullable = false)
//	private User user;

	
	@JsonIgnore
	@OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
	
//	@OneToMany(mappedBy = "cart" , cascade = CascadeType.ALL , orphanRemoval = true)
//	@Column(name = "cart_items")
//	private Set<CartItem> cartItems = new HashSet<>();
	
//	@Column(name = "total_price")
//	private double totalPrice;
	
	@Column(name="total_item")
	private int totalItem;
	@Column(name="totalDiscountedPrice")
	private double totalDiscountedPrice;

}

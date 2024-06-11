package com.ecommerce_project.model;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@RequiredArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "Checkout")
public class Checkout {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
   private Long id ;
    
//    @OneToMany(mappedBy = "checkout", cascade = CascadeType.ALL)
//    private Set<CartItem> cartItems; 
    
    @OneToMany(mappedBy = "checkout", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CartItem> cartItems = new ArrayList<>() ;
    
    @OneToOne(mappedBy = "checkout" , cascade = CascadeType.ALL )
    private Address address;
    
    private double totalPrice;
    
	@JsonIgnore
	@OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
	
	 
}

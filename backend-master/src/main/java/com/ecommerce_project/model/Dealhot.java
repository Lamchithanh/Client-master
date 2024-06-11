package com.ecommerce_project.model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@RequiredArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "dealhot")
public class Dealhot {
	 @Id
	    @Column(name = "id")
	    @GeneratedValue(strategy = GenerationType.AUTO)
	   private Long id ;
	 
	 private String title ; 
	    
	    private String imageUrl ;
	    
	    private int discountPercent ;
	    
	    private double price ;
	    
	    private double totalPrice ; 
	    
	    @OneToMany(mappedBy = "dealhot", cascade = CascadeType.ALL, orphanRemoval = true)
	    private Set<Product> products = new HashSet<>();
	    
}

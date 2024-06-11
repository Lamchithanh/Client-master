package com.ecommerce_project.model;

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
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name = "FavouriteList")
public class FavouriteList {
	 @Id
     @Column(name = "id")
     @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id ;
	 
//	 @OneToMany(mappedBy = "favourite", cascade = CascadeType.ALL, orphanRemoval = true)
//	    private List<Product> products;
	 
	
//	 @JoinColumn(name = "product_id")
	 @ManyToOne
	 private Product product;
	 
	   @ManyToMany(mappedBy = "favourites")
	    private Set<User> users = new HashSet<>();

}

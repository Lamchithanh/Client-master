package com.ecommerce_project.model;

import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
@RequiredArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "Product")
public class Product {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id ;


    private String title ;


    private String description ;


    private double price ;

   
    private double discountedPrice ;

    
    private int discountPersent ;


   
    private int quantity ;

    
    @ManyToOne
    @JoinColumn(name = "brand_id")
    private Brand brand;
    
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category ;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Colors> colors = new ArrayList<>() ;
    
    
    private String imageUrl ;

    @OneToMany(mappedBy = "product" , cascade = CascadeType.ALL , orphanRemoval = true)
    private List<Review> reviews = new ArrayList<>() ;

    @OneToMany(mappedBy = "product" , cascade = CascadeType.ALL , orphanRemoval = true)
    private List<Rating> ratings = new ArrayList<>() ;

    @Column(name = "num_ratings")
    private int numRatings ;

    private LocalDateTime createAt ;

//    @ManyToOne
//    @JoinColumn(name = "favourite" )
//    private FavouriteList favourite;
    
    private String favouriteStatus ; 
    
    private double totalAmountPurchased ; 

    private String  soldAt ; 

    @ManyToOne
    @JoinColumn(name = "dealhot_id")
    private Dealhot dealhot;
    
//	@JsonIgnore
//	@ManyToOne
//	 @JoinColumn(name = "favourite_list_id")
//	private FavouriteList favouriteList;

//    @ManyToOne
//    @JoinColumn(name = "favourite_list_item_id")
//    private FavouriteListItem favouriteListItem;
}

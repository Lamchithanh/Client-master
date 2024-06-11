package com.ecommerce_project.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;


@Data
@AllArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "User")
public class User {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id ;
    
    @Column(name = "fullName")
	private String fullName  ;
    @Column(name = "password")
    private String password ;
    @Column(name = "email")
    private String email ;
    @Column(name = "phoneNumber")
    private String phoneNumber ;
    
    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private Checkout checkout ;
    
    @JsonIgnore
    @OneToMany(mappedBy = "user" , cascade = CascadeType.ALL)
    @Column(name = "ratings")
    private List<Rating> ratings = new ArrayList<>() ;
    
    @Column(name = "createAt")
    private LocalDateTime createAt ;
    
    private Date dateOfBirthDateTime ; 
    
    private String gender ; 

    private double totalAmountPurchased; 
    
    @ManyToMany
    @JoinTable(
        name = "user_favourite",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "favourite_id")
    )
    private Set<FavouriteList> favourites = new HashSet<>();

	
    
    
	




}

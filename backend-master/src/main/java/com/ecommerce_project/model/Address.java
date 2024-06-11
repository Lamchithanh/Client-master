package com.ecommerce_project.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name = "Address")
public class Address {
     @Id
     @Column(name = "id")
     @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id ;
     
   @Column(name = "fullName")
   private String fullName  ;
   
    @Column(name = "streetAddress")
     private String streetAddress ;
    
    @Column(name = "district")
    private String district ;
    
    @Column(name = "city")
    private String city ;
    

    
    @Column(name = "ward")
    private String ward ;
    

    
    @Column(name = "phoneNumber")
    private String phoneNumber ;
    
    
    @JoinColumn(name = "user_id") 
    @JsonIgnore
    @OneToOne
    private User user; 
    
    
    
    @JoinColumn(name = "checkout_id") 
    @JsonIgnore
    @OneToOne
    private Checkout checkout;
    



    
}

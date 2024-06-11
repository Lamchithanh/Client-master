package com.ecommerce_project.model;

import java.time.LocalDateTime;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name = "Rating")
public class Rating {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id ;

    @ManyToOne
    @JoinColumn(name = "user_id" , nullable = false)
    private User user ;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "product_id" , nullable = false)
    private Product product ;

   @Column(name = "rating")
    private double rating ;
   
   private LocalDateTime createAt ; 
}

package com.ecommerce_project.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.cglib.core.Local;

import java.time.LocalDateTime;

@Data
@Entity
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name = "Review")
public class Review {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy  = GenerationType.AUTO)
    private Long id ;

    private String review  ;

    @JsonIgnore
    @JoinColumn(name = "product_id")
    @ManyToOne
    private Product product ;

    @ManyToOne
   @JoinColumn(name = "user_id")
    private User user  ;

    private LocalDateTime createAt ;




}

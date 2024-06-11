package com.ecommerce_project.model;

import org.apache.catalina.Store;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name = "dataStatistics")
public class DataStatistics {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
   private Long id ;
    
    private Long productQuantity ;
    
    private Long UserQuantity ;
    
    private Long DealhotQuantity ;
    
    private double SaleAmountQuantity ;
    
    private Long storeNumber; 

}

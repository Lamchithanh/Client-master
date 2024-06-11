package com.ecommerce_project.request;

import lombok.Data;

@Data
public class CreateDealhotRequest {
	 
	 private String title ; 
	    private String imageUrl ;
	    private int discountPercent ;
	    private double price ;
}

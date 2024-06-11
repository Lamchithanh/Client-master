package com.ecommerce_project.request;

import java.util.List;

import lombok.Data;

@Data
public class ColorsRequest {
	 private String name;
	    private int quantity;
	    private List<SizeRequest> sizes;
}

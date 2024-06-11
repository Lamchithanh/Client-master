package com.ecommerce_project.request;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SizeRequest {
	private String name;
    private Integer quantity;
}

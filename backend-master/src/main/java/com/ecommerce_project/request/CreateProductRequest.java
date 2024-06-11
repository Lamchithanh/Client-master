package com.ecommerce_project.request;


import com.ecommerce_project.model.Size;
import lombok.Data;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
public class CreateProductRequest {
	 private String title;
	    private String description;
	    private Double price;
	    private Double discountedPrice;
	    private int discountPersent;
	    private int quantity;
	    private LocalDateTime createAt;
	    private String brand;
	    private List<ColorsRequest> colors;
	    private String soldAt;
	    private String favouriteStatus;
	    private String imageUrl;
	    private String topLavelCategory;
	    private String secondLavelCategory;
	    private String thirdLavelCategory;
}

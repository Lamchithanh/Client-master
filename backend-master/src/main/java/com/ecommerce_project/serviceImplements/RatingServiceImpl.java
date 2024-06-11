package com.ecommerce_project.serviceImplements;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce_project.exception.ProductException;
import com.ecommerce_project.model.Product;
import com.ecommerce_project.model.Rating;
import com.ecommerce_project.model.User;
import com.ecommerce_project.repository.RatingRepository;
import com.ecommerce_project.request.RatingRequest;
import com.ecommerce_project.service.ProductService;
import com.ecommerce_project.service.RatingService;

@Service
public class RatingServiceImpl implements RatingService{
    @Autowired
	private RatingRepository ratingRepository ; 
	@Autowired
	private ProductService productService ;
	@Override
	public Rating createRating(RatingRequest req, User user) throws ProductException {
		Product product = productService.findProductById(req.getProductId()); 
		Rating rating=new Rating();
		rating.setProduct(product);
		rating.setUser(user);
		rating.setRating(req.getRating());
		rating.setCreateAt(LocalDateTime.now());
		return ratingRepository.save(rating);
	}

	@Override
	public List<Rating> getProdutsRating(Long productId) {
		// TODO Auto-generated method stub
		return ratingRepository.getAllProductsRating(productId);
	}
	
	

}

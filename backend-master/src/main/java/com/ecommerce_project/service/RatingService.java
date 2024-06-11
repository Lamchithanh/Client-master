package com.ecommerce_project.service;

import org.springframework.stereotype.Service;

import com.ecommerce_project.exception.ProductException;
import com.ecommerce_project.model.Rating;
import com.ecommerce_project.model.User;
import com.ecommerce_project.request.RatingRequest;
import java.util.List;

@Service 
public interface RatingService {
	public Rating createRating(RatingRequest req  , User user) throws ProductException;
	public List<Rating> getProdutsRating(Long productId);
}

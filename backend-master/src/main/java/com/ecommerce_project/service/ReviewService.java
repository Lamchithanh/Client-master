package com.ecommerce_project.service;

import org.springframework.stereotype.Service;

import com.ecommerce_project.exception.ProductException;
import com.ecommerce_project.model.Review;
import com.ecommerce_project.model.User;
import com.ecommerce_project.request.ReviewRequest;
import java.util.List;

@Service
public interface ReviewService {
	public Review createReive(ReviewRequest req  , User user)throws ProductException;
	public List<Review> getAllReview(Long productId);
}

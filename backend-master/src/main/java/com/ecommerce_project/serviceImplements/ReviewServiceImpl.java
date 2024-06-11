package com.ecommerce_project.serviceImplements;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce_project.exception.ProductException;
import com.ecommerce_project.model.Review;
import com.ecommerce_project.model.User;
import com.ecommerce_project.model.Product;
import com.ecommerce_project.repository.ProductRepository;
import com.ecommerce_project.repository.ReviewRepository;
import com.ecommerce_project.request.ReviewRequest;
import com.ecommerce_project.service.ProductService;
import com.ecommerce_project.service.ReviewService;

@Service
public class ReviewServiceImpl implements ReviewService{
	@Autowired
	private ReviewRepository reviewRepository;
	@Autowired
	private ProductService productService;
	@Autowired
	private ProductRepository productRepository;

	@Override
	public Review createReive(ReviewRequest req, User user) throws ProductException {
		Product product=productService.findProductById(req.getProductId());
		Review review=new Review();
		review.setUser(user);
		review.setProduct(product);
		review.setReview(req.getReview());
		review.setCreateAt(LocalDateTime.now());
		return reviewRepository.save(review);
	}

	@Override
	public List<Review> getAllReview(Long productId) {
		
		return reviewRepository.getAllProductsRevew(productId);
	}
   
}

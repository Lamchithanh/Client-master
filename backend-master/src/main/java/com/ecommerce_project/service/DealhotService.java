package com.ecommerce_project.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ecommerce_project.exception.ProductException;
import com.ecommerce_project.model.CartItem;
import com.ecommerce_project.model.Dealhot;
import com.ecommerce_project.request.CreateDealhotRequest;

@Service
public interface DealhotService {
	public Dealhot createDealhot(CreateDealhotRequest req);
	
	public List<Dealhot> getAllDealhot( );
	public void deleteDealhot(Long dealhotId) ;
}

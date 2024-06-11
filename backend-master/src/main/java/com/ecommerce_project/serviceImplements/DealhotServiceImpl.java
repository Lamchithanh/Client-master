package com.ecommerce_project.serviceImplements;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce_project.exception.ProductException;
import com.ecommerce_project.model.Dealhot;
import com.ecommerce_project.repository.DealhotRepository;
import com.ecommerce_project.request.CreateDealhotRequest;
import com.ecommerce_project.service.DealhotService;

@Service
public class DealhotServiceImpl implements DealhotService {
	@Autowired
	private DealhotRepository dealhotRepository ; 

	@Override
	public Dealhot createDealhot(CreateDealhotRequest req) {
	    Dealhot dealhot = new Dealhot(); 
	    dealhot.setTitle(req.getTitle());
	    dealhot.setImageUrl(req.getImageUrl());
	    dealhot.setPrice(req.getPrice());
	    dealhot.setDiscountPercent(req.getDiscountPercent());
	    double discount = 100 - req.getDiscountPercent();
	    dealhot.setTotalPrice((req.getPrice() * discount )/100);
	    Dealhot dealhotSave =  dealhotRepository.save(dealhot);
		return dealhotSave;
	}

	@Override
	public List<Dealhot> getAllDealhot() {
		 List<Dealhot> dealhots =  dealhotRepository.findAll();
		return dealhots;
	}

	@Override
	public void deleteDealhot(Long dealhotId)  {
		Dealhot dealhot = dealhotRepository.findDealhotById(dealhotId);
		dealhotRepository.delete(dealhot);
		
	}

}

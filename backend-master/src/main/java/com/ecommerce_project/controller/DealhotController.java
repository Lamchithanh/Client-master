package com.ecommerce_project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce_project.model.Dealhot;
import com.ecommerce_project.model.Product;
import com.ecommerce_project.request.CategoryRequest;
import com.ecommerce_project.request.CreateDealhotRequest;
import com.ecommerce_project.request.CreateProductRequest;
import com.ecommerce_project.response.ApiResponse;
import com.ecommerce_project.service.DealhotService;

@RestController
@RequestMapping("/api/dealhot")
public class DealhotController {
  @Autowired
	private DealhotService dealhotService ; 
	
	@PostMapping("/create")
	public ResponseEntity<Dealhot> createDealhot(@RequestBody CreateDealhotRequest req){
         Dealhot dealhot =  dealhotService.createDealhot(req);
	return new ResponseEntity<Dealhot>(dealhot , HttpStatus.CREATED);
	}
	
	@GetMapping("/get")
	public ResponseEntity<List<Dealhot>> getAllDealhot(){
         List<Dealhot> dealhot =  dealhotService.getAllDealhot();
	return new ResponseEntity<List<Dealhot>>(dealhot , HttpStatus.CREATED);
	}
	
	@DeleteMapping("/delete/{deleteId}")
	public ResponseEntity<ApiResponse> deleteDealhot(@PathVariable Long deleteId){
           dealhotService.deleteDealhot(deleteId);
         ApiResponse res = new ApiResponse();
 	    res.setMessage("Dealhot has been delete success");
 	    res.setStatus(true);
 	    return new ResponseEntity<>(res, HttpStatus.OK);
	}
}

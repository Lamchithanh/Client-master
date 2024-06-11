package com.ecommerce_project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ecommerce_project.service.ProductService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ecommerce_project.exception.OrderException;
import com.ecommerce_project.exception.ProductException;
import com.ecommerce_project.model.Brand;
import com.ecommerce_project.model.Category;
import com.ecommerce_project.model.Order;
import com.ecommerce_project.model.Product;
import com.ecommerce_project.repository.CategoryRepository;
import com.ecommerce_project.request.CategoryRequest;
import com.ecommerce_project.request.CreateProductRequest;
import com.ecommerce_project.service.CategoryService;
import com.ecommerce_project.service.OrderService;
import com.ecommerce_project.response.ApiResponse;

@RestController
@RequestMapping("/api/admin/products")
public class AdminProductController {
	@Autowired
    private ProductService productService ; 
	@Autowired
	private CategoryService categoryService ; 
	
	
	@PostMapping("/")
	public ResponseEntity<Product> createProduct(@RequestBody CreateProductRequest req){
   
		
	String topLavelCategory =	req.getTopLavelCategory(); 
	String secondLavelCategory =	req.getSecondLavelCategory(); 
	String thirdLavelCategory =	req.getThirdLavelCategory(); 
	CategoryRequest categoryRequest = new CategoryRequest();
	categoryRequest.setTopLavelCategory(topLavelCategory);
	categoryRequest.setSecondLavelCategory(secondLavelCategory);
	categoryRequest.setThirdLavelCategory(thirdLavelCategory);
	
	
//	Category thirdlavelCategory = categoryService.createOrGetCategory(categoryRequest);
	
//	categoryRequest.setTopLavelCategory(topLavelCategory);
//	categoryRequest.setSecondLavelCategory(secondCategory);
//	categoryRequest.setThirdLavelCategory(thirdCategory);
	
	
	
	Product product=productService.createProduct(req);
	return new ResponseEntity<Product>(product , HttpStatus.CREATED);
	}
	
	
	@DeleteMapping("/delete/{productId}")
	public ResponseEntity<ApiResponse> deleteProduct(@PathVariable Long productId) throws ProductException{
	productService.deleteProduct(productId);
	ApiResponse res=new ApiResponse();
	res.setMessage("product deleted successfully");
	res.setStatus(true);
	return new ResponseEntity<>(res , HttpStatus.OK);
	}
	
//	@GetMapping("/all")
//	public ResponseEntity<List<Product> > filndAllProduct(){
//	List<Product> products= productService.getAllProducts();
//	return new ResponseEntity<>(products , HttpStatus.OK);
//	}
	
	@PutMapping("/{productId}/update")
	public ResponseEntity<Product> updateProduct(@RequestBody Product req , @PathVariable Long productId) throws ProductException {
	Product product=productService.updateProduct(productId  , req);
	return new ResponseEntity<Product>(product ,HttpStatus.CREATED);
}
	
	@PostMapping("/creates")
	public ResponseEntity<ApiResponse> createMultipleProduct(@RequestBody CreateProductRequest[] req){
	for(CreateProductRequest product:req) {
	productService.createProduct(product);
	}
	ApiResponse res=new ApiResponse();
	res.setMessage("product create successfully");
	res.setStatus(true);
	return new ResponseEntity<>(res , HttpStatus.CREATED);
	}
	
	
	@GetMapping("/brand")
	public ResponseEntity<List<Brand>> getAllBrand(){
	List<Brand> brand  = productService.getAllBrand();
	return new ResponseEntity<List<Brand>>(brand , HttpStatus.CREATED);
	}
	
	@DeleteMapping("/delete/brand/{brandId}")
	public ResponseEntity<ApiResponse> deleteBrand(@PathVariable Long brandId) throws ProductException{
	productService.deleteBrand(brandId);
	ApiResponse res=new ApiResponse();
	res.setMessage("brand deleted successfully");
	res.setStatus(true);
	return new ResponseEntity<>(res , HttpStatus.OK);
	}
}

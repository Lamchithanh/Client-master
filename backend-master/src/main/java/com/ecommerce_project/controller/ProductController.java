package com.ecommerce_project.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.EnableLoadTimeWeaving;
import org.springframework.data.domain.Page;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.ecommerce_project.exception.ProductException;
import com.ecommerce_project.exception.UserException;
import com.ecommerce_project.model.Cart;
import com.ecommerce_project.model.CartItem;
import com.ecommerce_project.model.Product;
import com.ecommerce_project.model.User;
import com.ecommerce_project.repository.ProductRepository;

import com.ecommerce_project.response.ApiResponse;
import com.ecommerce_project.service.ProductService;

@RestController
@RequestMapping("/api")
public class ProductController {
	@Autowired
	private ProductService productService;
	@Autowired
	private ProductRepository productRepository ; 
	

	
	
	
	@GetMapping("/products/search/{query}")
	public ResponseEntity<List<Product>> searchProducts( @PathVariable String query 	 ){
		List<Product> products= productService.searchProducts(query);
		return new 	 ResponseEntity<List<Product>>(products , HttpStatus.ACCEPTED) ;
	}
	@GetMapping("/products/soldAt/{soldAt}")
	public ResponseEntity<List<Product>> searchProductsBySoldAt( @PathVariable String soldAt 	 ){
		List<Product> products= productService.searchProductsBySoldAt(soldAt);
		return new 	 ResponseEntity<List<Product>>(products , HttpStatus.ACCEPTED) ;
	}
	  @GetMapping("/allProducts")
	    public ResponseEntity<List<Product>> findAllProduct(@RequestHeader("Authorization")String jwt ) throws UserException{
		  List<Product> allProduct =   productRepository.findAll();
	        return new ResponseEntity<List<Product>>(allProduct, HttpStatus.OK);
	    }

	
	@GetMapping("/products")
	public ResponseEntity<Page<Product>> findProductByCategoryHandler(
			 @RequestParam(required = false) List<String> color,
			    @RequestParam(required = false) List<String> size,
			    @RequestParam(required = false) Integer minPrice,
			    @RequestParam(required = false) Integer maxPrice,
			    @RequestParam(required = false) Integer minDiscount,
			    @RequestParam(required = false) String sort,
			    @RequestParam(required = false) Boolean stock,
			    @RequestParam(required = false) String category,
			    @RequestParam Integer pageNumber,
			    @RequestParam Integer pageSize
			
	){
		 Page<Product> res = productService.getAllProducts(pageNumber, pageSize);
		    System.out.println("complete products");
		    return new ResponseEntity<>(res, HttpStatus.ACCEPTED);
	}
	  
	  
	  


	@GetMapping("/products/id/{productId}")
	public ResponseEntity<Product> findProductByIdHandler(@PathVariable Long productId) throws ProductException{
	Product product=productService.findProductById(productId);
	return new ResponseEntity<Product>(product ,HttpStatus.ACCEPTED);
	}
	
	@PutMapping("/product/favourite/{productId}")
	public ResponseEntity<Product> favouriteSetStatus(@PathVariable Long productId) throws ProductException{
		
	 	
		 Product product =  productService.setFavouriteProductStatusById(productId) ; 
	;
	    return new ResponseEntity<Product>(product, HttpStatus.CREATED);
	}
	
	@GetMapping("/products/favourite")
	public ResponseEntity<List<Product>> getFavourite(){
		List<Product> products= productService.getProductsFavourite();
		return new 	 ResponseEntity<List<Product>>(products , HttpStatus.ACCEPTED) ;
	}
	@DeleteMapping("/product/{productId}")
	public ResponseEntity<Product> removeFavourite(@PathVariable Long productId) throws ProductException{
	Product product =  productService.removeFavourite(productId);
	return new ResponseEntity<Product>(product , HttpStatus.OK);
	}
	 @GetMapping("/productsByBrands")
	    public ResponseEntity<List<Product>>  getProductsByBrands(@RequestParam List<String> brands) {
	        List<Product> products =   productService.getProductsByBrands(brands);
	        return new ResponseEntity<List<Product>>(products , HttpStatus.OK);
	    }
	 @GetMapping("/admin/products")
		public ResponseEntity<List<Product>> findProductsByCategory( @RequestParam String category 	 ){
			List<Product> products= productService.getProductByCategory(category);
			System.out.println("Product has been found");
			return new 	 ResponseEntity<List<Product>>(products , HttpStatus.ACCEPTED) ;
		}

}

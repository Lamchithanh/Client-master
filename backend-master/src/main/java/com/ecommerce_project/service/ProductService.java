package com.ecommerce_project.service;

import com.ecommerce_project.exception.ProductException;
import com.ecommerce_project.model.Brand;
import com.ecommerce_project.model.Category;
import com.ecommerce_project.model.Order;
import com.ecommerce_project.model.Product;
import com.ecommerce_project.request.CreateProductRequest;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;


import java.util.List;
@Service
public interface ProductService {
    public Product createProduct(CreateProductRequest req );
      public String deleteProduct (Long productId) throws ProductException;
      public Product removeFavourite (Long productId) throws ProductException;
      
       public Product updateProduct(Long productId, Product req) throws ProductException ;

      public Product findProductById(Long id )throws ProductException ;


    public List<Product> findProductByCategory(String category) ;

    
    public List<Product> searchProducts(String query) ;
    
    public List<Product> searchProductsBySoldAt(String soldAt) ;
//    public Page<Product> getAllProduct(String category  , List<String> colors  , List<String> sizes , Integer minPrice  , Integer maxPrice ,
//                                       Integer minDiscount, String sort , String stock  , Integer pageNumber   , Integer pageSize  ) ;
    
    public Page<Product> getAllProduct(String category  , List<String> colors  , Integer minPrice  , Integer maxPrice ,
            Integer minDiscount, String sort , String stock  , Integer pageNumber   , Integer pageSize  ) ;
    
    public List<Product> getProductByCategory(String category ) ;
    
    public Page<Product> getAllProducts(int pageNumber, int pageSize) ; 
    
    public List<Product> getProductsByCategory( String category) ; 
    
    public Product setFavouriteProductStatusById(Long id )throws ProductException ;
    
    public List<Brand> getAllBrand() ; 
    public void deleteCategory(Category category);
    
    public void deleteBrand (Long brandId) throws ProductException;

    public List<Product> getProductsFavourite(  );
    
    public List<Product> getProductsByBrands(List<String> brands);



}

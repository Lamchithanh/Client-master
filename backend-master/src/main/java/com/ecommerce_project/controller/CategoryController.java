package com.ecommerce_project.controller;
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

import com.ecommerce_project.model.Category;
import com.ecommerce_project.request.CategoryRequest;
import com.ecommerce_project.response.ApiResponse;
import com.ecommerce_project.service.CategoryService;
import com.ecommerce_project.service.ProductService;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {
	 @Autowired
    private  CategoryService categoryService;
	 @Autowired
	 private ProductService productService;

   
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Category>> getAllCategories() {
        List<Category> categories = categoryService.getAllCategories();
        return ResponseEntity.ok(categories);
    }
//    @PostMapping("/create")
//    public ResponseEntity<Category> createCategory(@RequestBody CategoryRequest categoryRequest) {
//        Category category = categoryService.createOrGetCategory(categoryRequest);
//        return new ResponseEntity<>(category, HttpStatus.OK);
//    }
    
//    @DeleteMapping("/delete/{id}")
//    public  ResponseEntity<ApiResponse>  deleteCategory(@PathVariable Long id) {
//    	productService.deleteCategory(id);
//    	ApiResponse res=new ApiResponse();
//   	 res.setMessage("category deleted successfully");
//   	 res.setStatus(true);
//   	 return new ResponseEntity<>(res , HttpStatus.OK);
//    }
}
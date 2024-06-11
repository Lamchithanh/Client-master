package com.ecommerce_project.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce_project.model.Category;
import com.ecommerce_project.model.GroupCategory;
import com.ecommerce_project.repository.CategoryRepository;
import com.ecommerce_project.repository.GroupCategoryRepository;
import com.ecommerce_project.request.CategoryRequest;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
	@Autowired
    private  CategoryRepository categoryRepository;
	@Autowired
	private GroupCategoryRepository groupCategoryRepository;  

    
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }
    
//    public Category createOrGetCategory(CategoryRequest categoryRequest) {
//        Category topLavelCategory = getOrCreateCategory(categoryRequest.getTopLavelCategory(), 1, null);
//        Category secondLavelCategory = getOrCreateCategory(categoryRequest.getSecondLavelCategory(), 2, topLavelCategory);
//        Category thirdLavelCategory = getOrCreateCategory(categoryRequest.getThirdLavelCategory(), 3, secondLavelCategory);
//
//        return thirdLavelCategory;
//    }
//
//    private Category getOrCreateCategory(String categoryName, int level, Category parentCategory) {
//        Optional<Category> existingCategory = categoryRepository.findByNameAndLevelAndParentCategory(categoryName, level, parentCategory);
//        if (existingCategory.isPresent()) {
//            return existingCategory.get();
//        } else {
//            Category category = new Category();
//            category.setName(categoryName);
//            category.setLevel(level);
//            category.setParentCategory(parentCategory);
//            return categoryRepository.save(category);
//        	
//        }
//    }
    
    

    
    
    public Category createOrGetCategory(CategoryRequest categoryRequest) {
        GroupCategory groupCategory = getOrCreateGroupCategory(); 
        Category topLevelCategory = getOrCreateCategory(categoryRequest.getTopLavelCategory(), 1, null, groupCategory);
        Category secondLevelCategory = getOrCreateCategory(categoryRequest.getSecondLavelCategory(), 2, topLevelCategory, groupCategory);
        Category thirdLevelCategory = getOrCreateCategory(categoryRequest.getThirdLavelCategory(), 3, secondLevelCategory, groupCategory);

        return thirdLevelCategory;
    }



    private GroupCategory getOrCreateGroupCategory() {
        GroupCategory groupCategory = new GroupCategory();
        return groupCategoryRepository.save(groupCategory);
    }
    private Category getOrCreateCategory(String categoryName, int level, Category parentCategory, GroupCategory groupCategory) {
        Optional<Category> existingCategory = categoryRepository.findByNameAndLevelAndParentCategoryAndGroupCategory(categoryName, level, parentCategory, groupCategory);
        if (existingCategory.isPresent()) {
            return existingCategory.get();
        } else {
            Category category = new Category();
            category.setName(categoryName);
            category.setLevel(level);
            category.setParentCategory(parentCategory);
            category.setGroupCategory(groupCategory);
            return categoryRepository.save(category);
        }
    }
    
   
    
    
}
package com.ecommerce_project.repository;

import com.ecommerce_project.model.Category;
import com.ecommerce_project.model.GroupCategory;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category , Long> {
   
    
    @Query("SELECT c FROM Category c WHERE c.name = :name AND c.parentCategory.name = :parentCategoryName")
 public   Category findByNameAndParent(@Param("name") String name, @Param("parentCategoryName") String parentCategoryName);
    
    
    public   Optional<Category> findByNameAndLevelAndParentCategory(String name, int level, Category parentCategory);
    
    Optional<Category> findByNameAndLevelAndParentCategoryAndGroupCategory(String name, int level, Category parentCategory, GroupCategory groupCategory);
    
    @Query("SELECT c FROM Category c WHERE c.name = :name")
    public  Category findIdByNameCategory(@Param("name") String name);
    
    public   Category findByName(String name);
    
    @Query("SELECT c FROM Category c WHERE c.id = :id")
    public   Category findCategoryById(@Param("id") Long id);
    
    @Query("SELECT c FROM Category c WHERE c.groupCategory = :groupCategory")
    public  List<Category>  findCategoryByGroupCategory(@Param("groupCategory") GroupCategory groupCategory);
    
    

    
}

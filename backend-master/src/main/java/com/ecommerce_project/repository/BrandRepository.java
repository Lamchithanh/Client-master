package com.ecommerce_project.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ecommerce_project.model.Brand;
import com.ecommerce_project.model.Product;

@Repository
public interface BrandRepository extends JpaRepository<Brand, Long> {
	 Optional<Brand> findByName(String name);
	 
	 @Query("SELECT b FROM Brand b WHERE b.id = :id")
	 public  Brand findBrandById(@Param("id") Long id);
	 
	 @Query("SELECT b FROM Brand b WHERE b.name = :name")
	 public  Brand findBrandByName(@Param("name") String Name);
	 
	 @Query("SELECT b.id FROM Brand b WHERE b.name IN :names")
	 public   List<Long> findBrandsIdByNames(@Param("names") List<String> names);
	 
	 
}

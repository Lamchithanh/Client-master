package com.ecommerce_project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ecommerce_project.model.FavouriteList;
import com.ecommerce_project.model.Product;

public interface FavouriteRepository extends JpaRepository<FavouriteList, Long> {

	@Query("SELECT f FROM FavouriteList f WHERE f.product.id = :id")
	public FavouriteList findProductById(@Param("id") Long id);
	
	
}

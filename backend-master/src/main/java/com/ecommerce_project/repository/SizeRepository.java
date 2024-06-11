package com.ecommerce_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce_project.model.Size;

@Repository
public interface SizeRepository extends JpaRepository<Size, Long> {

}

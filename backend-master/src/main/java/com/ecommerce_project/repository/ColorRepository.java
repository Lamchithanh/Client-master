package com.ecommerce_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce_project.model.Colors;

@Repository
public interface ColorRepository extends JpaRepository<Colors, Long> {

}

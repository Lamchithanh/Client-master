package com.ecommerce_project.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce_project.model.GroupCategory;
@Repository
public interface GroupCategoryRepository extends JpaRepository<GroupCategory, Long> {
	 Optional<GroupCategory> findFirstByOrderByIdAsc();

}

package com.ecommerce_project.repository;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ecommerce_project.model.DataStatistics;

@Repository
public interface DataStatisticsRepository extends JpaRepository<DataStatistics, Long>{

//	@Query("SELECT d FROM DataStatistics d ORDER BY d.id ASC")
//    public DataStatistics findFirstDataStatistics();
	
	@Query("SELECT d FROM DataStatistics d WHERE d.storeNumber.id= : id")
  public DataStatistics findByStoreNumber(@Param("id") Long id);
}

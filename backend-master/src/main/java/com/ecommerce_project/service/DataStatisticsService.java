package com.ecommerce_project.service;

import org.springframework.stereotype.Service;

import com.ecommerce_project.model.Cart;
import com.ecommerce_project.model.DataStatistics;
import com.ecommerce_project.model.User;

@Service
public interface DataStatisticsService {

	public DataStatistics getDataStatistics();

}

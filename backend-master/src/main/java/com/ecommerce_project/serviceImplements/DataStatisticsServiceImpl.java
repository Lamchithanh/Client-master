package com.ecommerce_project.serviceImplements;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce_project.model.CartItem;
import com.ecommerce_project.model.DataStatistics;
import com.ecommerce_project.model.Order;
import com.ecommerce_project.repository.DataStatisticsRepository;
import com.ecommerce_project.repository.DealhotRepository;
import com.ecommerce_project.repository.OrderRepository;
import com.ecommerce_project.repository.ProductRepository;
import com.ecommerce_project.repository.UserRepository;
import com.ecommerce_project.service.DataStatisticsService;

@Service
public class DataStatisticsServiceImpl implements DataStatisticsService {

	@Autowired
	private ProductRepository productRepository ; 
	
	@Autowired
	private UserRepository userRepository ; 
	
	@Autowired
	private DealhotRepository dealhotRepository ; 
	@Autowired
	private DataStatisticsRepository dataStatisticsRepository ;
	@Autowired
	private OrderRepository orderRepository ; 
	
	@Override
	public DataStatistics getDataStatistics() {
		

		List<DataStatistics> existingDataStatisticsList = dataStatisticsRepository.findAll();


	    if (existingDataStatisticsList.isEmpty()) {
	      
	        Long productQuantity = productRepository.count();
	        Long userQuantity = userRepository.count();
	        Long dealhotQuantity = dealhotRepository.count();
	        
	        DataStatistics dataStatistics = new DataStatistics();
	        dataStatistics.setProductQuantity(productQuantity);
	        dataStatistics.setUserQuantity(userQuantity);
	        dataStatistics.setDealhotQuantity(dealhotQuantity);
	        dataStatistics.setStoreNumber(666L);
//	        dataStatistics.setSaleAmountQuantity(0);
	        List<Order> orders =  orderRepository.findAllReceivedOrders();
	        double totalSaleAmount = 0.0;
	        for (Order order : orders) {
	            totalSaleAmount += order.getTotalPrice();
	        }
	        dataStatistics.setSaleAmountQuantity(totalSaleAmount);
	        
	        
	        return dataStatisticsRepository.save(dataStatistics);
	    } else {
	     
	        dataStatisticsRepository.deleteAll(existingDataStatisticsList);
	        Long productQuantity = productRepository.count();
	        Long userQuantity = userRepository.count();
	        Long dealhotQuantity = dealhotRepository.count();
	        
	        DataStatistics dataStatistics = new DataStatistics();
	        dataStatistics.setProductQuantity(productQuantity);
	        dataStatistics.setUserQuantity(userQuantity);
	        dataStatistics.setDealhotQuantity(dealhotQuantity);
	        dataStatistics.setStoreNumber(666L);
//	        dataStatistics.setSaleAmountQuantity(0);
	        List<Order> orders =  orderRepository.findAllReceivedOrders();
	        double totalSaleAmount = 0.0;
	        for (Order order : orders) {
	            totalSaleAmount += order.getTotalPrice();
	        }
	        dataStatistics.setSaleAmountQuantity(totalSaleAmount);
	     
	        
	        return dataStatisticsRepository.save(dataStatistics);
	    }
//		 Long productQuantity =    productRepository.count() ; 
//		Long userQuantity =  userRepository.count() ; 
//		Long dealhotQuantity =  dealhotRepository.count(); 
//		DataStatistics dataStatistics = new DataStatistics();
//		dataStatistics.setProductQuantity(productQuantity);
//		dataStatistics.setUserQuantity(userQuantity);
//		dataStatistics.setDealhotQuantity(dealhotQuantity);
//		dataStatistics.setSaleAmountQuantity(0);
//		DataStatistics  dataStatisticsSaved = 	dataStatisticsRepository.save(dataStatistics); 
		
		
	}



}

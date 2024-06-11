
package com.ecommerce_project.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;
import com.ecommerce_project.model.Brand;
import com.ecommerce_project.repository.BrandRepository;

@Service
@RequiredArgsConstructor
public class BrandService {
	@Autowired
	private  BrandRepository brandRepository;
    public Brand saveBrand(Brand brand) {
    	 return brandRepository.save(brand);
    }
}
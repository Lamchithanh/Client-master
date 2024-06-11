package com.ecommerce_project.controller;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ecommerce_project.model.Brand;
import com.ecommerce_project.request.CreateBrandRequest;
import com.ecommerce_project.service.BrandService;

@RestController
@RequestMapping("/api/brand")
public class AdminBrandController {
	@Autowired
    private  BrandService brandService;

    @PostMapping("/")
    public ResponseEntity<Brand> createBrand(@RequestBody CreateBrandRequest createBrandRequest) {
        Brand brand = new Brand();
        brand.setName(createBrandRequest.getName());
        brand.setImageUrl(createBrandRequest.getImageUrl());
        Brand savedBrand = brandService.saveBrand(brand);
        return ResponseEntity.ok(savedBrand);
    }
}
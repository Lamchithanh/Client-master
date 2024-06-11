package com.ecommerce_project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce_project.exception.UserException;
import com.ecommerce_project.model.DataStatistics;
import com.ecommerce_project.model.Order;
import com.ecommerce_project.model.User;
import com.ecommerce_project.service.DataStatisticsService;

@RestController
@RequestMapping("/api/dataStatistics")
public class HomeController {   
    @Autowired
    private DataStatisticsService dataStatisticsService;

    @GetMapping("/")
    public ResponseEntity<DataStatistics> dataStatistics() {
        DataStatistics dataStatistics = dataStatisticsService.getDataStatistics();
        return new ResponseEntity<DataStatistics>(dataStatistics ,HttpStatus.OK);
    }
}

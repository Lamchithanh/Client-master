//package com.ecommerce_project.model;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//
//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.ManyToOne;
//import jakarta.persistence.Table;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.RequiredArgsConstructor;
//
//@Entity
//@Data
//@RequiredArgsConstructor
//@AllArgsConstructor
//@Table(name = "favouriteListItem")
//public class FavouriteListItem {
//	@Id
//	@Column(name = "id")
//	@GeneratedValue(strategy = GenerationType.AUTO)
//	private Long id;
//	
//	@JsonIgnore
//	@ManyToOne
//	private FavouriteList favouriteList;
//	
//	@ManyToOne
//	private Product product;
//	
//	
//
//}

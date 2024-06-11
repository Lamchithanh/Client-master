package com.ecommerce_project.model;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;


@Data
@AllArgsConstructor
@RequiredArgsConstructor
public class PaymentDetails {

	
	private String paymentMethod;
	private String status;
	private String paymentId;
	private String razorpayPaymentLinkld;
	private String razorpayPaymentLinkReferenceld;
	private String razorpayPaymentLinkStatus;
	private String razorpayPaymentld;

}

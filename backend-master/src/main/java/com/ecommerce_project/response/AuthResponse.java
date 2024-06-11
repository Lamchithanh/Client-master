package com.ecommerce_project.response;

import org.springframework.beans.factory.annotation.Autowired;

import com.ecommerce_project.model.User;
import com.fasterxml.jackson.databind.deser.Deserializers.Base;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

//@Data
//@NoArgsConstructor
//@AllArgsConstructor
public class AuthResponse  {
	 
	 private String jwt ;
	    private String message ;
	    
		public String getJwt() {
			return jwt;
		}
		public void setJwt(String jwt) {
			this.jwt = jwt;
		}
		public String getMessage() {
			return message;
		}
		public void setMessage(String message) {
			this.message = message;
		}
		public AuthResponse(String jwt, String message) {
			super();
			this.jwt = jwt;
			this.message = message;
		}
		public AuthResponse() {
			
		}



}

package com.ecommerce_project.service;

import com.ecommerce_project.exception.UserException;
import com.ecommerce_project.model.Address;
import com.ecommerce_project.model.User;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public interface UserService {

    public User findUserById(Long userId) throws UserException;
    public User findUserProfileByJwt(String jwt) throws UserException;

    public User updateUserProfile(User userDB , User userNew) throws UserException;
    public List<User> getAllUser() throws UserException;
    public User getAllUser(Long userId) throws UserException;
    public Address createAddress(User user , Address shippingAddress) throws UserException;


}

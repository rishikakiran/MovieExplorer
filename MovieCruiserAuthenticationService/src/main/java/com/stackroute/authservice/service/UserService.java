package com.stackroute.authservice.service;

import org.springframework.stereotype.Service;

import com.stackroute.authservice.exceptions.UserAlreadyExistsException;
import com.stackroute.authservice.exceptions.UserNotFoundException;
import com.stackroute.authservice.model.User;

@Service
public interface UserService {
	
	boolean saveUser(User user) throws UserAlreadyExistsException;
	
	public User findByUserIdAndPassword(String userId, String password) throws UserNotFoundException;

}

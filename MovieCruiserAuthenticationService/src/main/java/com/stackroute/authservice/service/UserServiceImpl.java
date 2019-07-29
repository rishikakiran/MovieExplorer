package com.stackroute.authservice.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.authservice.exceptions.UserAlreadyExistsException;
import com.stackroute.authservice.exceptions.UserNotFoundException;
import com.stackroute.authservice.model.User;
import com.stackroute.authservice.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	private UserRepository userRepository;
	
	@Autowired
	public UserServiceImpl(UserRepository userRepository) {
		this.userRepository=userRepository;
	}

	@Override
	public boolean saveUser(User user) throws UserAlreadyExistsException {
		Optional<User> userResult=userRepository.findById(user.getUserId());
		if(userResult.isPresent())
		{
			throw new UserAlreadyExistsException("User with Id: "+user.getUserId()+" already exists!");
		}
		
		userRepository.save(user);
		return true;
	}

	@Override
	public User findByUserIdAndPassword(String userId, String password) throws UserNotFoundException {
		User user=userRepository.findByUserIdAndPassword(userId, password);
		if(user==null){
			throw new UserNotFoundException("UserId and Password mismatch!");
		}
		return user;
	}

}

package com.stackroute.authservice.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Date;
import java.util.Optional;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.stackroute.authservice.exceptions.UserAlreadyExistsException;
import com.stackroute.authservice.exceptions.UserNotFoundException;
import com.stackroute.authservice.model.User;
import com.stackroute.authservice.repository.UserRepository;

public class UserServiceTest {
	
	@Mock
	private UserRepository userRepository;
	
	private User user;
	
	@InjectMocks
	private UserServiceImpl userServiceImpl;
	
	Optional<User> opUser;
	
	@Before
	public void setUp(){
		MockitoAnnotations.initMocks(this);
		user=new User("rk","rishika","kiran","password",new Date());
		opUser=Optional.of(user);
	}

	@Test
	public void testSaveUserSuccess() throws UserAlreadyExistsException{
		
		when(userRepository.save(user)).thenReturn(user);
		boolean flag=userServiceImpl.saveUser(user);
		assertEquals("Cannot register User",true,flag);
		verify(userRepository,times(1)).save(user);
	}
	
	@Test(expected = UserAlreadyExistsException.class)
	public void testSaveUserFailure() throws UserAlreadyExistsException{
		when(userRepository.findById(user.getUserId())).thenReturn(opUser);
		when(userRepository.save(user)).thenReturn(user);
		boolean flag=userServiceImpl.saveUser(user);
	}
	
	@Test
	public void testValidateSuccess() throws UserNotFoundException{
		when(userRepository.findByUserIdAndPassword(user.getUserId(), user.getPassword())).thenReturn(user);
		User foundUser=userServiceImpl.findByUserIdAndPassword(user.getUserId(), user.getPassword());
		assertNotNull(foundUser);
		assertEquals("rishika", foundUser.getFirstName());
		verify(userRepository, times(1)).findByUserIdAndPassword(user.getUserId(), user.getPassword());
	}
	
	@Test( expected = UserNotFoundException.class)
	public void testValidateFailure() throws UserNotFoundException{
		when(userRepository.findByUserIdAndPassword(user.getUserId(),user.getPassword())).thenReturn(null);
		userServiceImpl.findByUserIdAndPassword(user.getUserId(), user.getPassword());
	}
}

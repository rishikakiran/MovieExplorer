package com.stackroute.authservice.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.stackroute.authservice.exceptions.UserAlreadyExistsException;
import com.stackroute.authservice.model.User;
import com.stackroute.authservice.service.JwtSecurityTokenGeneratorImpl;
import com.stackroute.authservice.service.SecurityTokenGenerator;
import com.stackroute.authservice.service.UserService;
import com.stackroute.authservice.service.UserServiceImpl;

@RestController
@CrossOrigin
@RequestMapping("api/v1/userservice")
@EnableWebMvc
public class UserController {
	
	@Autowired
	private UserService userService;	
	
	@Autowired
	private SecurityTokenGenerator securityTokenGenerator;
	

	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody User user)
	{
		try {
			userService.saveUser(user);
			return new ResponseEntity<String>("User Registered Successfully",HttpStatus.CREATED);
		} catch (UserAlreadyExistsException e) {
			return new ResponseEntity<String>("{\"message\" : \""+e.getMessage()+"\"}",HttpStatus.CONFLICT);
		}
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User loginDetails){
		
		try {
			
			String userId=loginDetails.getUserId();
			String password=loginDetails.getPassword();
			
			if(userId==null || password==null)
			{
				throw new Exception("UserId or Password cannot be empty");
			}
			User loggedInUser=userService.findByUserIdAndPassword(userId,password);
			Map<String, String> map=securityTokenGenerator.generateToken(loggedInUser);
			
			return new ResponseEntity<Map<String, String>>(map, HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<String>("{\"message\" : \""+e.getMessage()+"\"}",HttpStatus.UNAUTHORIZED);
		}
	}
}

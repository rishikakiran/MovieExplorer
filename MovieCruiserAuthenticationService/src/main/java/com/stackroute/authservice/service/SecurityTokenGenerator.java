package com.stackroute.authservice.service;

import java.util.Map;

import com.stackroute.authservice.model.User;

public interface SecurityTokenGenerator {

	Map<String,String> generateToken(User user);
}

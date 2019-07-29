package com.stackroute.authservice.service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.springframework.stereotype.Service;

import com.stackroute.authservice.model.User;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class JwtSecurityTokenGeneratorImpl implements SecurityTokenGenerator {

	@Override
	public Map<String, String> generateToken(User user) {

		String jwtToken= "";
//		final int EXP_TIME=10_00_00_000;
		
		
		//GENERATE THE JWT TOKEN
		jwtToken=Jwts.builder().setSubject(user.getUserId()).setIssuedAt(new Date()).setExpiration(new Date(System.currentTimeMillis()+TimeUnit.DAYS.toMillis(1))).
				signWith(SignatureAlgorithm.HS256, "secretkey").compact();

		Map<String, String> map=new HashMap<>();
		map.put("token",jwtToken);
		map.put("message", "User Successfully Logged In");
		return map;
	}

}

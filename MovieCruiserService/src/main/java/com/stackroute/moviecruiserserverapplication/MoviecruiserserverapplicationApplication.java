package com.stackroute.moviecruiserserverapplication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.ResponseBody;

import com.stackroute.moviecruiserserverapplication.filter.JwtFilter;

@SpringBootApplication
public class MoviecruiserserverapplicationApplication {

	@Bean
	public FilterRegistrationBean JwtFilter() {
		final FilterRegistrationBean registrationBean=new FilterRegistrationBean<>();
		registrationBean.setFilter(new JwtFilter());
		registrationBean.addUrlPatterns("/api/*");
		return registrationBean;
	}
	
	public static void main(String[] args) {
		SpringApplication.run(MoviecruiserserverapplicationApplication.class, args);
	}

}

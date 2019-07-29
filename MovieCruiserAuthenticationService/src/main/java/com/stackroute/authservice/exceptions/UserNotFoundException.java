package com.stackroute.authservice.exceptions;

@SuppressWarnings("serial")
public class UserNotFoundException extends Exception {

	String message;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public UserNotFoundException(String message) {
		super();
		this.message = message;
	}
	
}

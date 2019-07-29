package com.stackroute.moviecruiserserverapplication.exception;


@SuppressWarnings("serial")
public class MovieAlreadyExistsException extends Exception {

	
	String message;
	
	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	public MovieAlreadyExistsException() {
		// TODO Auto-generated constructor stub
	}

	public MovieAlreadyExistsException(final String message) {
		super();
		this.message = message;
	}

	@Override
	public String toString() {
		return "MovieAlreadyExistsException [message=" + message + "]";
	}

	
}

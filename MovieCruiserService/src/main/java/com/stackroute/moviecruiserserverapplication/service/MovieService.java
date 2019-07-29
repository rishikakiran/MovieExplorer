package com.stackroute.moviecruiserserverapplication.service;

import java.util.List;

import com.stackroute.moviecruiserserverapplication.domain.Movie;
import com.stackroute.moviecruiserserverapplication.exception.MovieAlreadyExistsException;
import com.stackroute.moviecruiserserverapplication.exception.MovieNotFoundException;

public interface MovieService {

	boolean saveMovie(Movie movie) throws MovieAlreadyExistsException;
	
	Movie updateMovie(Movie updateMovie) throws MovieNotFoundException;
	
	boolean deleteMovie(Movie movie);
	
	Movie getMovieById(int id) throws MovieNotFoundException;
	
	List<Movie> getMyMovies(String userId);
	
	Movie findByMovieIdAndUserId(String movieId, String userId) throws MovieNotFoundException;
}

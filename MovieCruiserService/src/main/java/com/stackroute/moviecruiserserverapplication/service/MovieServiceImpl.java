package com.stackroute.moviecruiserserverapplication.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.moviecruiserserverapplication.domain.Movie;
import com.stackroute.moviecruiserserverapplication.exception.MovieAlreadyExistsException;
import com.stackroute.moviecruiserserverapplication.exception.MovieNotFoundException;
import com.stackroute.moviecruiserserverapplication.repository.MovieRepository;

@Service
public class MovieServiceImpl implements MovieService{

	
	private final transient MovieRepository movieRepo;
	
	/*
	 * Constructor based autowiring of repo in service
	 * 
	 */
	
	@Autowired
	public MovieServiceImpl(final MovieRepository movieRepo){
		super();
		this.movieRepo=movieRepo;
	}

	/*
	*	method for saving a movie
	*	If movie already exists throws MovieAlreadyExistsException
	*/
	
	@Override
	public boolean saveMovie(final Movie movie) throws MovieAlreadyExistsException{
		
		final Movie object=movieRepo.findByMovieIdAndUserId(movie.getMovieId(), movie.getUserId());
		if(object!=null)
		{
			throw new MovieAlreadyExistsException("Could not save movie, Movie Already Exists!");
		}
		
		movieRepo.save(movie);
		return true;
	}
	
	/*
	*	Method for updating a movie
	*	If movie does not exist throws MovieNotFoundException
	*/
	
	@Override
	public Movie updateMovie(final Movie updateMovie) throws MovieNotFoundException{
		final Movie movie=movieRepo.findByMovieIdAndUserId(updateMovie.getMovieId(), updateMovie.getUserId());
		if(movie==null){
			throw new MovieNotFoundException("Could not update movie, Movie Not Found!");
		}
		movie.setComments(updateMovie.getComments());
		movieRepo.save(movie);
		return movie;
	}
	

	/*
	*	Delete Request for deleting a movie with movie Id
	*	If movie does not exist throws MovieNotFoundException
	*/
		
	@Override
	public boolean deleteMovie(Movie movie){
		movieRepo.delete(movie);
		return true;
	}

	/*
	*	Get Request for fetching a movie with movie Id
	*	If movie does not exist throws MovieNotFoundException
	*/
	
	@Override
	public Movie getMovieById(int id) throws MovieNotFoundException{
		final Movie movie=movieRepo.findById(id).orElse(null);
		if(movie==null){
			throw new MovieNotFoundException("Movie Not Found!");
		}
		return movie;
	}
	
	
	/*
	 * get a list of movies added by the user in his watchlist
	 */
	@Override
	public List<Movie> getMyMovies(String userId){
		return movieRepo.findByUserId(userId);
	}
	
	@Override
	public Movie findByMovieIdAndUserId(String movieId, String userId) throws MovieNotFoundException{
		Movie movie= movieRepo.findByMovieIdAndUserId(movieId, userId);
		if(movie==null)
		{
			throw new MovieNotFoundException("Could not delete movie, Movie Not Found!");
		}
		return movie;
	}
}

package com.stackroute.moviecruiserserverapplication.controller;

import java.util.List;

import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.omg.CORBA.ServerRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.moviecruiserserverapplication.domain.Movie;
import com.stackroute.moviecruiserserverapplication.exception.MovieAlreadyExistsException;
import com.stackroute.moviecruiserserverapplication.exception.MovieNotFoundException;
import com.stackroute.moviecruiserserverapplication.service.MovieService;

import io.jsonwebtoken.Jwts;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@CrossOrigin
@RequestMapping(path = "/api/v1/movieservice")
@Api(value="moviecruiser", description="For managing CRUD operations for a movie database")
public class MovieController {
	
	private MovieService movieService;
	
	/*
	*	Constructor based autowiring of service class in controller
	*/
	@Autowired
	public MovieController(final MovieService movieService){
		this.movieService=movieService;
	}

	/*
	*	Post method for saving a movie
	*	If movie already exists HTTP response is CONFLICT
	*/
	
	@PostMapping("/movie")
	@ApiOperation(value = "Add a new movie")
	public ResponseEntity<?> saveMovie(@RequestBody final Movie movie, HttpServletRequest request,
			HttpServletResponse response){		

		System.out.println("saving movie");
		final String authHeader=request.getHeader("authorization");
		final String token=authHeader.substring(7);
		String userId=Jwts.parser().setSigningKey("secretkey").parseClaimsJws(token).getBody().getSubject();
		
		System.out.println("User id :: "+userId);
		ResponseEntity<?> responseEntity;
		try {
			movie.setUserId(userId);
			movieService.saveMovie(movie);
			responseEntity=new ResponseEntity<Movie>(movie, HttpStatus.CREATED);
		} catch (MovieAlreadyExistsException e) {
			responseEntity=new ResponseEntity<String>("{\"message\" : \""+e.getMessage()+"\"}", HttpStatus.CONFLICT);
		}
		
		return responseEntity;
	}
	
	/*
	*	Put Request for updating a movie with movie Id
	*	If movie does not exist HTTP response is CONFLICT
	*/
	
	@PutMapping(path="/movie")
	@ApiOperation(value = "Edit an existing movie")
	public ResponseEntity<?> updateMovie( @RequestBody final Movie movie){
		ResponseEntity<?> responseEntity;

		Movie fetchedMovie;
		
		try {
			fetchedMovie= movieService.updateMovie(movie);
			responseEntity=new ResponseEntity<Movie>(fetchedMovie, HttpStatus.OK);
		} catch (MovieNotFoundException e) {
			responseEntity=new ResponseEntity<String>("{\"message\" : \""+e.getMessage()+"\"}", HttpStatus.CONFLICT);
		}
		return responseEntity;
	}
	

	/*
	*	Delete Request for deleting a movie with movie Id
	*	If movie does not exist HTTP response is NOT_FOUND
	*/
	
	@DeleteMapping(path="/movie/{movieId}")
	@ApiOperation(value = "Delete an existing movie or throw exception")
	public ResponseEntity<?> deleteMovieById(@PathVariable( "movieId" ) final String movieId, HttpServletRequest request,
			HttpServletResponse response){
		ResponseEntity<?> responseEntity;
		final String authHeader=request.getHeader("authorization");
		final String token=authHeader.substring(7);
		String userId=Jwts.parser().setSigningKey("secretkey").parseClaimsJws(token).getBody().getSubject();
		
		try {
			Movie movie=movieService.findByMovieIdAndUserId(movieId, userId);
			movieService.deleteMovie(movie);
		} catch (MovieNotFoundException e) {
			responseEntity=new ResponseEntity<String>("{\"message\" : \""+e.getMessage()+"\"}", HttpStatus.NOT_FOUND);
		}

		responseEntity=new ResponseEntity<String>("Movie deleted successfully", HttpStatus.OK);
		return responseEntity;
	}

	/*
	*	Get Request for fetching a movie with movie Id
	*	If movie does not exist HTTP response is NOT_FOUND
	*/
	
	@GetMapping(path="/movie/{id}")
	@ApiOperation(value = "Get movie using id")
	public ResponseEntity<?> fetchMovieById(@PathVariable( "id" ) final Integer id){
		
		ResponseEntity<?> responseEntity;
		
		try {
			Movie movie=movieService.getMovieById(id);
			responseEntity=new ResponseEntity<Movie>(movie, HttpStatus.OK);
		} catch (MovieNotFoundException e) {
			responseEntity=new ResponseEntity<String>("{\"message\" : \""+e.getMessage()+"\"}", HttpStatus.NOT_FOUND);
		}

		return responseEntity;
	}
	

	/*
	*	Get mapping for getting a list of all available movies
	*/
	
	@GetMapping("/movies")
	@ApiOperation(value = "Fetch list of all the movies")
	public @ResponseBody ResponseEntity<List<Movie>> getAllMovies(final HttpServletRequest request, 
			final HttpServletResponse response){
		String authHeader=request.getHeader("authorization");
		String token=authHeader.substring(7);
		String userId= Jwts.parser().setSigningKey("secretkey").parseClaimsJws(token).getBody().getSubject();
		return new ResponseEntity<List<Movie>>(movieService.getMyMovies(userId),HttpStatus.OK);
	}
}

package com.stackroute.moviecruiserserverapplication.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.stackroute.moviecruiserserverapplication.domain.Movie;
import com.stackroute.moviecruiserserverapplication.exception.MovieAlreadyExistsException;
import com.stackroute.moviecruiserserverapplication.exception.MovieNotFoundException;
import com.stackroute.moviecruiserserverapplication.repository.MovieRepository;


public class MovieServiceImplTest {
	
	@Mock
	private transient MovieRepository movieRepo;
	
	private transient Movie movie;
	
	@InjectMocks
	private MovieServiceImpl movieServiceImpl;
	
	transient Optional<Movie> options;
	
	@Before
	public void setUpMocks()
	{
		MockitoAnnotations.initMocks(this);
		movie = new Movie(1,"902","ppnh2","great movie","xyz/abc "," ",45.5,112,"rkt");
		options=Optional.of(movie);
	}
	
	@Test
	public void testMockCreation(){
		
		assertNotNull("JpaRepository creation fails!",movie);
	}
	
	/*
	 * Test saveMovie() with correct data
	 */
	
	@Test
	public void testSaveMovieSuccess() throws MovieAlreadyExistsException{
		when(movieRepo.save(movie)).thenReturn(movie);
		final boolean flag=movieServiceImpl.saveMovie(movie);
		assertTrue("saving movie failed!",flag);
		verify(movieRepo,times(1)).save(movie);
		verify(movieRepo,times(1)).findByMovieIdAndUserId(movie.getMovieId(), movie.getUserId());
	}
	
	/*
	 * Test saveMovie() for an already existing movie
	 * test passes when MovieAlreadyExistsException is thrown
	 */
	
	@Test(expected =MovieAlreadyExistsException.class)
	public void testSaveMovieFailure() throws MovieAlreadyExistsException{
		when(movieRepo.findByMovieIdAndUserId(movie.getMovieId(), movie.getUserId())).thenReturn(movie);
		when(movieRepo.save(movie)).thenReturn(movie);
		final boolean flag=movieServiceImpl.saveMovie(movie);
		assertFalse("saving movie failed!",flag);
		verify(movieRepo,times(1)).findByMovieIdAndUserId(movie.getMovieId(), movie.getUserId());
	}
	
	/*
	 * Test updateMovie() with correct data
	 */
	@Test
	public void testUpdateMovieSuccess() throws MovieNotFoundException{
		when(movieRepo.findByMovieIdAndUserId(movie.getMovieId(), movie.getUserId())).thenReturn(movie);
		when(movieRepo.findById(movie.getId())).thenReturn(options);
		when(movieRepo.save(movie)).thenReturn(movie);
		movie.setComments("not so good movie");
		final Movie updatedMovue=movieServiceImpl.updateMovie(movie);
		assertEquals("movie update failed","not so good movie", updatedMovue.getComments());
		verify(movieRepo,times(1)).save(movie);
		verify(movieRepo,times(1)).findByMovieIdAndUserId(movie.getMovieId(), movie.getUserId());
	}
	
	/*
	 * Test delete mapping for movies
	 * verifying the delete and findById method is service is called only once
	 */	
	
	@Test
	public void testDeleteMovieByIdSuccess() throws MovieNotFoundException{
		when(movieRepo.findByMovieIdAndUserId(movie.getMovieId(), movie.getUserId())).thenReturn(movie);
		doNothing().when(movieRepo).delete(movie);
		final boolean flag=movieServiceImpl.deleteMovie(movie);
		assertTrue("deleting movie failed!",flag);
		verify(movieRepo,times(1)).delete(movie);
	}
	
	@Test
	public void testGetMovieById() throws MovieNotFoundException{
		when(movieRepo.findById(1)).thenReturn(options);
		final Movie movie1=movieServiceImpl.getMovieById(movie.getId());
		assertEquals("fetching movie failed!",movie1, movie);
		verify(movieRepo,times(1)).findById(movie.getId());
	}
	
	/*
	 * Test getAllMovies()
	 */	
	
//	@Test
//	public void testGetAllMovies() throws MovieNotFoundException{
//		final List<Movie> movieList=new ArrayList<>(1);
//		when(movieRepo.findAll()).thenReturn(movieList);
//		doNothing().when(movieRepo).delete(movie);
//		final List<Movie> listOfMovies=movieServiceImpl.getAllMovies();
//		assertEquals(movieList,listOfMovies);
//		verify(movieRepo,times(1)).findAll();
//	}
}

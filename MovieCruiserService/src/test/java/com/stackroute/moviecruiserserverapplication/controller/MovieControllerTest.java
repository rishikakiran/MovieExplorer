package com.stackroute.moviecruiserserverapplication.controller;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.moviecruiserserverapplication.domain.Movie;
import com.stackroute.moviecruiserserverapplication.service.MovieService;

@RunWith(SpringRunner.class)
@WebMvcTest(MovieController.class)
public class MovieControllerTest {
	
	@Autowired
	private transient MockMvc mvc;
	
	@MockBean
	private transient MovieService movieService;
	
	@InjectMocks
	private MovieController movieController;
	
	private transient Movie movie;
	
	static List<Movie> moviesList;
	
	@Before
	public void setUp() throws Exception{
		MockitoAnnotations.initMocks(this);
		mvc=MockMvcBuilders.standaloneSetup(movieController).build();
		moviesList=new ArrayList<>(Arrays.asList(new Movie(2,"9025","uri","great movie","xyz/abc "," ",45.5,112,"kirtee"),
				(new Movie(1,"902","ppnh2","great movie","xyz/abc "," ",45.5,112,"kirtee"))));
		movie=moviesList.get(0);
	}
	
	/*
	 * Test saveMovie() with correct data
	 */
	/*
	@Test
	public void testSaveMovieSuccess() throws Exception{
		String token="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraXJ0ZWUiLCJpYXQiOjE1NTM1MDg5MjcsImV4cCI6MTU1MzU5NTMyN30.5mPGpgMm3jbHHxClLy7pu4bGFDSNumMPTrAKs9odCEY";
		when(movieService.saveMovie(movie)).thenReturn(true);
		mvc.perform(post("/api/v1/movieservice/movie").header("authorization", "Bearer "+token).contentType(MediaType.APPLICATION_JSON).
				content(jsonToString(movie))).andExpect(status().isCreated());
		
		verify(movieService,times(1)).saveMovie(Mockito.any(Movie.class));
		verifyNoMoreInteractions(movieService);
	}
	*/
	/*
	 * Test updateMovie() with correct data
	 */	

	@Test
	public void testUpdateMovieSuccess() throws Exception{
		movie.setComments("not so great");
		when(movieService.updateMovie(movie)).thenReturn(moviesList.get(0));
		mvc.perform(put("/api/v1/movieservice/movie").contentType(MediaType.APPLICATION_JSON).
				content(jsonToString(movie))).andExpect(status().isOk());
		
		verify(movieService,times(1)).updateMovie(Mockito.any(Movie.class));
		verifyNoMoreInteractions(movieService);
	}
	
	/*
	 * Test delete mapping for movies
	 * verifying the deleteById method is service is called only once
	 */	
	
	/*@Test
	public void testDeleteMovie() throws Exception{
		String token="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraXJ0ZWUiLCJpYXQiOjE1NTM1MDg5MjcsImV4cCI6MTU1MzU5NTMyN30.5mPGpgMm3jbHHxClLy7pu4bGFDSNumMPTrAKs9odCEY";
		when(movieService.deleteMovie(movie)).thenReturn(true);
		when(movieService.findByMovieIdAndUserId(movie.getMovieId(), movie.getUserId())).thenReturn(movie);
		mvc.perform(delete("/api/v1/movieservice/movie/{movieId}",movie.getMovieId()).header("authorization", "Bearer "+token)).andExpect(status().isOk());
		
		verify(movieService,times(1)).findByMovieIdAndUserId(movie.getMovieId(), movie.getUserId());
		verify(movieService,times(1)).deleteMovie(movie);
		verifyNoMoreInteractions(movieService);
	}*/
	
	/*
	 * Test get mapping for movies
	 * verifying the getMovieById method is service is called only once
	 */	
	
	@Test
	public void testGetMovieById() throws Exception{
		when(movieService.getMovieById(movie.getId())).thenReturn(movie);
		mvc.perform(get("/api/v1/movieservice/movie/{id}",1)).andExpect(status().isOk());
		
		verify(movieService,times(1)).getMovieById(1);
		verifyNoMoreInteractions(movieService);
	}
	
	/*
	 * Test getMyMovies()
	 * mocking the getAllMovies to return null and then 
	 * just checking the HTTP response status of the request
	 */	
	
/*	@Test
	public void testGetMyMovies() throws Exception {
		when(movieService.getMyMovies("rkt")).thenReturn(moviesList);
		mvc.perform(get("/api/v1/movieservice/movies")).andExpect(status().isOk());
		
		verify(movieService,times(1)).getMyMovies("rkt");
		verifyNoMoreInteractions(movieService);
	}*/
	
	
	/*
	 * map a json string to an object
	 */
	private static String jsonToString(final Object obj) throws JsonProcessingException{
		String result;
		try{
			final ObjectMapper mapper=new ObjectMapper();
			final String jsonContent=mapper.writeValueAsString(obj);
			result=jsonContent;
		}
		catch(JsonProcessingException e){
			result="json processing error!";
		}		
		return result;
	}
}

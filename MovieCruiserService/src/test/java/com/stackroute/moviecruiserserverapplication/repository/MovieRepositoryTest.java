package com.stackroute.moviecruiserserverapplication.repository;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.stackroute.moviecruiserserverapplication.domain.Movie;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Transactional
public class MovieRepositoryTest {

	@Autowired
	private transient MovieRepository repo;
		
	public void setRepo(final MovieRepository repo){
		this.repo=repo;
	}
	
	public MovieRepositoryTest(){
		
	}
	
	@Before
	public void setUp(){
		
	}
	
	@After
	public void tearDown(){
	}
	
	@Test
	public void testSaveMovie() throws Exception{
		Movie savedMovie=repo.save(new Movie(0,"902","ppnh2","great movie","xyz/abc "," ",45.5,112,"rkt"));
		final Movie movie=repo.findById(savedMovie.getId()).get();
		assertThat(movie.getId()).isEqualTo(savedMovie.getId());
	}
	
	@Test
	public void testUpdateMovie(){
		Movie savedMovie=repo.save(new Movie(0,"902","ppnh2","great movie","xyz/abc "," ",45.5,112,"rkt"));
		Movie movie=repo.findById(savedMovie.getId()).get();
		assertThat(movie.getName()).isEqualToIgnoringCase("ppnh2");
		movie.setComments("not so great movie");
		repo.save(movie);
		Movie updatedMovie=repo.findById(savedMovie.getId()).get();
		assertThat("not so great movie").isEqualTo(updatedMovie.getComments());
	}
	
	@Test
	public void testDeleteMovie(){
		Movie savedMovie=repo.save(new Movie(0,"902","ppnh2","great movie","xyz/abc "," ",45.5,112,"rkt"));
		repo.deleteById(savedMovie.getId());
		assertThat(Optional.empty()).isEqualTo(repo.findById(savedMovie.getId()));
	}
	
	@Test
	public void testGetMovie(){
		Movie savedMovie=repo.save(new Movie(0,"902","ppnh2","great movie","xyz/abc "," ",45.5,112,"rkt"));
		final Movie movie=repo.findById(savedMovie.getId()).get();
		assertThat(movie.getName()).isEqualTo("ppnh2");
	}
	
	@Test
	public void testGetMyMovies(){
		repo.save(new Movie(0,"902","ppnh2","great movie","xyz/abc "," ",45.5,112,"rkt"));
		repo.save(new Movie(0,"902","ppnh2","great movie","xyz/abc "," ",45.5,112,"rkt"));
		final List<Movie> movieList=repo.findByUserId("rkt");
		assertThat(movieList.get(0).getName()).isEqualTo("ppnh2");
	}
}

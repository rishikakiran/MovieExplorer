import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { Movie } from '../../movie';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'movie-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  movies: Array<Movie>;
  useWatchlistApi = true;
  
  constructor(private movieService : MovieService,
    private snackBar: MatSnackBar) {
    this.movies=[];
   }

  ngOnInit() {

    this.movieService.getMoviesFromWatchlist().subscribe((res) => {
      if(res.length===0){
        this.snackBar.open("Your Watchlist is Empty",'',{
          duration: 1000
        });
      }
      res.forEach(element => {
        console.log(JSON.stringify(element));
        var postData={
          "id": element.movieId,
          "title": element.name,
          "poster_path": element.posterPath,
          "release_date" : element.releaseDate,
          "vote_average" :element.voteAverage,
          "vote_count" :element.voteCount,
          "userId": element.userId
        }
        this.movies.push(<Movie>postData);
      });
      
    });
    
  }

}

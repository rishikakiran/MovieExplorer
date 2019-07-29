import { Component, OnInit, Input } from '@angular/core';
import { Movie, RetrievedMovie } from '../../movie';
import { MovieService } from '../../movie.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar, MatDialog } from '@angular/material';

@Component({
  selector: 'movie-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input()
  movies:Array<Movie>;
  @Input()
   useWatchlistApi : boolean;
  
  constructor(private snackbar: MatSnackBar,
    private movieService : MovieService ){
    this.movies=[];
  }
  ngOnInit(){
   
    
  }

  onDelete(movie:Movie){

    // for(let i=0;i<this.movies.length; i++)
    // {
    //   if(movie.id === this.movies[i].id)
    //   {
    //     this.movies.splice(i,1);
    //   }
    // }

    this.movieService.deleteMovieFromWatchlist(movie.id).subscribe(
      ()=>{
        this.snackbar.open("Removed "+`${movie.title}`+" From Watchlist Successfully",'',{
          duration: 1000
        });
      });

      const index=this.movies.indexOf(movie);
      this.movies.splice(index,1);
  }

  addToWatchlist(movie:Movie){
    this.movieService.addMovieToWatchlist(movie).subscribe(
      (movie:RetrievedMovie) =>{
        this.snackbar.open("Added "+`${movie.name}`+" To Watchlist Successfully",'',{
          duration: 1000
        });
      });
  }

  updateWatchlist(movie : Movie){

  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, RetrievedMovie } from './movie';
import { map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  tmdbEndPoint: string;
  imagePrefix: string;
  apiKey : string;
  watchlistEndPoint : string;
  springEndPoint: string;
  search : string;

  constructor(private http:HttpClient) {    
    this.apiKey='api_key=de5170af8a729fa221563e510e28bb2d';     
    this.tmdbEndPoint='https://api.themoviedb.org/3/movie';
    this.imagePrefix="https://image.tmdb.org/t/p/w500";
    this.watchlistEndPoint='http://localhost:3000/watchlist';
    this.springEndPoint="http://localhost:2212/api/v1/movieservice/movie";
    this.search="https://api.themoviedb.org/3/search/movie";
  }

  getMovies(type : string, page : number =1): Observable<Array<Movie>>
  { 
    const endPoint=this.tmdbEndPoint+'/'+type+'?'+this.apiKey+'&page='+page;
    return this.http.get(endPoint).pipe(
      retry(3),      
      map(this.pickMovieResults),
      map(this.transformPosterPathMovies.bind(this))
    );
  }

  transformPosterPathMovies(movies) : Array<Movie>{
    return movies.map(movie =>
      {
        movie.poster_path = this.imagePrefix+movie.poster_path;
        return movie;
      });
  }

  pickMovieResults(response){
    return response['results'];
  }

  searchMovies(searchKey:string): Observable<Array<Movie>>{
    if(searchKey.length>0){
      const url=`${this.search}?${this.apiKey}&page=1&include_adult=false&query=${searchKey}`;
      console.log(url);
      return this.http.get(url).pipe(
        retry(3),
        map(this.pickMovieResults),
        map(this.transformPosterPathMovies.bind(this))
      );
    }
  }

  addMovieToWatchlist(movie){
    var postData={
      "movieId": movie.id,
      "name": movie.title,
      "posterPath": movie.poster_path,
      "releaseDate" : movie.release_date,
      "voteAverage" :movie.vote_average,
      "voteCount" :movie.vote_count,
      "userId" :movie.userId
    }
   // console.log(movie.id+" "+postData.movieId);
    return this.http.post(this.springEndPoint,postData);
  }
  
  getMoviesFromWatchlist():Observable<Array<RetrievedMovie>> {
    return this.http.get<Array<RetrievedMovie>>(this.springEndPoint+"s");
  }

  deleteMovieFromWatchlist(id:number){
    let url: string= `${this.springEndPoint}/${id}`;
    return this.http.delete(url,{responseType :'text'});
  }

  updateMovieInWatchlist(movie){

    var putData={
      "movieId": movie.id,
      "name": movie.title,
      "posterPath": movie.poster_path,
      "releaseDate" : movie.release_date,
      "voteAverage" :movie.vote_average,
      "voteCount" :movie.vote_count,
      "comments":movie.comments,
      "userId":movie.userId
    }
    console.log(JSON.stringify(putData));
    return this.http.put(this.springEndPoint,putData);
  }
}

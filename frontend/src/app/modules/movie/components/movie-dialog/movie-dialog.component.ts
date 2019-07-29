import { Component, OnInit, Inject } from '@angular/core';
import { Movie } from '../../movie';
import { MatSnackBar, MatDialogRef , MAT_DIALOG_DATA} from '@angular/material';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'movie-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.css']
})
export class MovieDialogComponent implements OnInit {

  movie :Movie;
  comments: string;
  actionType : string;
  constructor( public snackBar : MatSnackBar, 
    public dialogRef: MatDialogRef<MovieDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data : any,
  private movieService : MovieService
  ) { 
    this.comments=data.obj.comments;
    this.movie=data.obj;
    this.actionType=data.actionType;
  }

  ngOnInit() {
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateComments(){
    this.movie.comments=this.comments;
    this.dialogRef.close();
    this.movieService.updateMovieInWatchlist(this.movie).subscribe(
      (movie)=>{
        this.snackBar.open(`Updated ${this.movie.title} Successfully`,'',{
          duration :1000
        })
      }
    );
  }

}

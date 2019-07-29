import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../movie';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../../movie.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { MovieDialogComponent } from '../movie-dialog/movie-dialog.component';

@Component({
  selector: 'movie-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  @Input()
   movie : Movie;

   @Input()
   useWatchlistApi : boolean;

   @Output() added = new EventEmitter();

   @Output() deleted = new EventEmitter();


  constructor( public dialog:MatDialog) { }
  ngOnInit() {
    
    
  }
  addToWatchList(){
    this.added.emit(this.movie);
    

  }
  deleteFromWatchList(){
    this.deleted.emit(this.movie);    
  }

  updateWatchList(actionType){

    let dialogRef = this.dialog.open(MovieDialogComponent, {
      width: '400px',
      data: {obj : this.movie, actionType:actionType}
    });

    console.log("open dialog");
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog is closed now");
    });
   
    //this.updated.emit(this.movie);  
  }
}

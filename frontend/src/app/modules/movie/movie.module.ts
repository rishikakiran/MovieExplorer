import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule, MatButtonModule, MatCheckboxModule, MatSnackBarModule, MatDialogModule, MatInputModule} from '@angular/material';

import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { MovieService } from './movie.service';
import { ContainerComponent } from './components/container/container.component';
import { MovieRouterModule } from './movie-router.module';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { TmdbContainerComponent } from './components/tmdb-container/tmdb-container.component';
import { MovieDialogComponent } from './components/movie-dialog/movie-dialog.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import {  InterceptorService } from './interceptor.service';

@NgModule({
  declarations: [
    ThumbnailComponent,
    ContainerComponent,
    WatchlistComponent,
    TmdbContainerComponent,
    MovieDialogComponent,
    SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MovieRouterModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents :[
    MovieDialogComponent
  ],
  exports: [
    ThumbnailComponent,
    MovieRouterModule,
    MovieDialogComponent
  ],
  providers:[
    MovieService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class MovieModule { }

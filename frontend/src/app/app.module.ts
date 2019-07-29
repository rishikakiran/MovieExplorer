import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatDialogModule, MatFormFieldModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieModule } from './modules/movie/movie.module';
import { FormsModule } from '@angular/forms';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MovieModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    MatFormFieldModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

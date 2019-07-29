import { NgModule } from '@angular/core';
import { CommonModule, FormStyle } from '@angular/common';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { MatCardModule, MatInputModule, MatSnackBarModule, MatDialogModule, MatButtonModule, MatFormFieldModule } from '@angular/material';
import { AuthServiceService } from './auth-service.service';
import { AuthRouterModule } from './authentication-router.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
    AuthRouterModule,
    FormsModule,
    MatFormFieldModule
  ],
  exports:[
    RegisterComponent,
    LoginComponent
  ],
  providers:[
    AuthServiceService
  ]
})
export class AuthenticationModule { 
  
}

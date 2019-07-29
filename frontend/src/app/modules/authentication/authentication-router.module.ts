import { RegisterComponent } from "./register/register/register.component";
import { LoginComponent } from './login/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const authRoutes=[
    {
        path: '',
        children:[
            {
                path: '',
                redirectTo: '/login',
                pathMatch : 'full'
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    }
];
@NgModule({
    imports : [
        RouterModule.forRoot(authRoutes)
    ],
    exports : [
        RouterModule
    ]
})

export class AuthRouterModule{

}
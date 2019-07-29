import { NgModule } from "@angular/core";
import { Route, Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { TmdbContainerComponent } from './components/tmdb-container/tmdb-container.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { SearchComponent } from './components/search/search.component';
import { AuthGuardService } from '../../auth-guard.service';

const movieRoutes : Routes =[
    {
        path: 'movies',
        children : [
            {
                path : '',
                redirectTo : '/movies/popular',
                pathMatch : 'full',
                canActivate :[AuthGuardService]
            },
            {
                path : 'popular',
                component : TmdbContainerComponent,
                canActivate :[AuthGuardService],
                data : {
                    movieType :'popular'
                }
            },
            {
                path : 'top_rated',
                component : TmdbContainerComponent,
                canActivate :[AuthGuardService],
                data : {
                    movieType :'top_rated'
                }
                
            },
            {
                path : 'watchlist',
                component : WatchlistComponent,
                canActivate :[AuthGuardService]                           
            },
            {
                path : 'search',
                component : SearchComponent,
                canActivate :[AuthGuardService]           
            }
        ]
    }
]

@NgModule({
    imports : [
        RouterModule.forChild(movieRoutes)
    ],
    exports : [
        RouterModule
    ]
})

export class MovieRouterModule{

}
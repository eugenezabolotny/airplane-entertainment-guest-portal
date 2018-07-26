import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Components
import {FlightStatusComponent} from './flight-status/flight-status.component';
import {HomeComponent} from './home/home.component';
import {MovieComponent} from './movies/movie/movie.component';
import {MovieWatchComponent} from './movies/movie-watch/movie-watch.component';
import {MoviesComponent} from './movies/movies.component';
import {PagesComponent} from './pages.component';
import {SettingsComponent} from './settings/settings.component';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      }, {
        path: 'movies',
        component: MoviesComponent,
      }, {
        path: 'movies/:id',
        component: MovieComponent
      }, {
        path: 'movies/:id/watch',
        component: MovieWatchComponent
      }, {
        path: 'flight-status',
        component: FlightStatusComponent,
      }, {
        path: 'settings',
        component: SettingsComponent,
      }, {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
}];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ],
})

export class PagesRoutingModule {}

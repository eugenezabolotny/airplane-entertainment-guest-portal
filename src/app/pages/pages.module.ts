import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {OwlModule} from 'ngx-owl-carousel';
import {PagesRoutingModule} from './pages-routing.module';
import {SidebarModule} from 'ng-sidebar';
import {TabsModule} from 'ngx-bootstrap';
import {TranslateModule} from '@ngx-translate/core';
import {VgBufferingModule} from 'videogular2/buffering';
import {VgControlsModule} from 'videogular2/controls';
import {VgCoreModule} from 'videogular2/core';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgStreamingModule} from 'videogular2/streaming';

// Components
import {PagesComponent} from './pages.component';
import {HeaderComponent} from '../header/header.component';
import {HomeComponent} from './home/home.component';
import {FlightStatusComponent} from './flight-status/flight-status.component';
import {MovieComponent} from './movies/movie/movie.component';
import {MovieWatchComponent} from './movies/movie-watch/movie-watch.component';
import {MoviesComponent} from './movies/movies.component';
import {SettingsComponent} from './settings/settings.component';

// Services
import {MoviesService} from './movies/movies.service';

@NgModule({
    declarations: [
        FlightStatusComponent,
        HeaderComponent,
        HomeComponent,
        MovieComponent,
        MovieWatchComponent,
        MoviesComponent,
        PagesComponent,
        SettingsComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        OwlModule,
        PagesRoutingModule,
        SidebarModule.forRoot(),
        TabsModule.forRoot(),
        TranslateModule,
        VgBufferingModule,
        VgControlsModule,
        VgCoreModule,
        VgOverlayPlayModule,
        VgStreamingModule
    ],
    providers: [
        MoviesService
    ]
})
export class PagesModule {
}

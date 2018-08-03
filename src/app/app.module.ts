import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app.routing';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import {TranslateModule, TranslateLoader, TranslatePipe} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {VgBufferingModule} from 'videogular2/buffering';
import {VgControlsModule} from 'videogular2/controls';
import {VgCoreModule} from 'videogular2/core';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgStreamingModule} from 'videogular2/streaming';

// Components
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {TestPlayerComponent} from './pages/test-player/test-player.component';

// services
import {AuthGuard, AuthInterceptor, AuthService} from './auth';
import {LoginService} from './login/login.service';
import { AnnouncementComponent } from './announcement/announcement.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        TestPlayerComponent,
        AnnouncementComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        CarouselModule,
        FormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (HttpLoaderFactory),
                deps: [HttpClient]
            }
        }),
        VgBufferingModule,
        VgControlsModule,
        VgCoreModule,
        VgOverlayPlayModule,
        VgStreamingModule
    ],
    providers: [
        AuthService,
        AuthGuard,
        LoginService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

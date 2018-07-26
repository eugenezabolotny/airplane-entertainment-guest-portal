import {Component, OnInit} from '@angular/core';
import {CarouselConfig} from 'ngx-bootstrap/carousel';
import {Router} from '@angular/router';

import {AuthService} from '../auth';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [
        {provide: CarouselConfig, useValue: {interval: 3000, noPause: true, showIndicators: false}}
    ]
})
export class LoginComponent implements OnInit {
    credentials = {
        email: '',
        name: '',
        accept: false
    };

    invalidCredentials = false;

    constructor(private authService: AuthService,
                private router: Router) {
    }

    ngOnInit() {
        this.authService.unauthorize();
        // if (this.authService.isAuthorized()) {
        //     this.router.navigate(['/home']);
        // }
    }

    login() {
        console.log(this.credentials);
        // response.data.api_token
        if (this.credentials.name.toLowerCase() === 'admin' && this.credentials.email.toLowerCase() === 'admin@admin.com') {
            this.invalidCredentials = false;
            this.authService.authorize({data: {api_token: 'authorized'}});
        } else {
            this.invalidCredentials = true;
        }
    }

}

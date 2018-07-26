import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    private authorizedRoute = '/home';
    private unauthorizedRoute = '/login';

    constructor(private router: Router) {
    }

    isAuthorized() {
        return !!localStorage.getItem('aircraftToken');
    }

    authorize(response) {
        this.saveToken(!!response ? response.data.api_token : '');
        this.router.navigate([this.authorizedRoute]);
    }

    unauthorize() {
        localStorage.setItem('aircraftToken', '');
        this.router.navigate([this.unauthorizedRoute]);
    }

    saveToken(token) {
        localStorage.setItem('aircraftToken', token);
    }

    getToken() {
        return localStorage.getItem('aircraftToken');
    }
}

import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse, HttpHandler, HttpEvent, HttpParams} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {AuthService} from './auth.service';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const params = new HttpParams().set('api_token', this.authService.getToken());

        const customReq = request.clone({
            // url: environment.endpoint + request.url,
            url: '',
            params: params
        });

        return next
            .handle(customReq)
            .do((ev: HttpEvent<any>) => {
                if (ev instanceof HttpResponse) {
                    // console.log('processing response', ev);
                }
            })
            .catch(response => {
                if (response instanceof HttpErrorResponse) {
                    // console.log('Processing http error', response);
                }

                return Observable.throw(response);
            });
    }
}

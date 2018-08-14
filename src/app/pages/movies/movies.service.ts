import {Injectable} from '@angular/core';
import {Movie} from './movie';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class MoviesService {

    public storedMovie: any;

    constructor(private http: HttpClient) {
    }

    storeMovie(movie: Movie) {
        this.storedMovie = movie;
    }

    getStoredMovie(): Observable<Movie> {
        return this.storedMovie;
    }

    removeStoredMovie() {
        this.storedMovie = [];
    }

    getMovies() {
        return this.http.get(`${environment.serverUrl}movies`);
    }

    getMovie(id: number) {
        return this.http.get(`${environment.serverUrl}movie/view/${id}`);
    }

    getMoviesByCategory(category: string) {
        return this.http.get(`${environment.serverUrl}movie/${category.charAt(0).toUpperCase() + category.slice(1)}`);
    }

    preparePathToCover(cover: string): string {
        return `${environment.mediaUrl}api/src/movies/${cover}`;
    }

    preparePathToMovie(movie: any): string {
        return `${environment.mediaUrl}${movie.path}`;
    }

}

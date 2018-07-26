import {Component, OnInit} from '@angular/core';
import {Movie} from './movie';
import {MoviesService} from './movies.service';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
    private filter = 'all';
    private movies: Movie[];
    private moviesBackUp: Movie[];
    private owlCarouselConfig: any;

    constructor(private moviesService: MoviesService) {
    }

    ngOnInit() {
        this.moviesService.removeStoredMovie();
        this.initMovies();
    }

    initMovies() {
        this.moviesService.getMovies().subscribe(
            (response: any) => {
                this.movies = response.movies;
                this.moviesBackUp = this.movies;
            },
            (error: any) => console.log(error)
        );

        this.owlCarouselConfig = {
            lazyLoad: true,
            loop: true,
            nav: true,
            items: 1,
            responsive: {
                768: {
                    items: 2
                },
                992: {
                    items: 5
                }
            }
        };
    }

    filterMovies(category: string) {
        this.filter = category;
        this.movies = [];

        if (category !== 'all') {
            this.moviesService.getMoviesByCategory(category).subscribe(
                (response: any) => this.movies = response,
                (error: any) => console.warn(error)
            );
        } else {
            this.movies = this.moviesBackUp;
        }
    }
}

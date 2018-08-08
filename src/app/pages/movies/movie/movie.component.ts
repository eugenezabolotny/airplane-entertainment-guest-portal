import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../movies.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
    public movie: any;

    constructor(public moviesService: MoviesService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getMovie(+this.route.snapshot.paramMap.get('id'));
    }

    getMovie(movieId: number) {
        this.moviesService.getMovie(movieId).subscribe(
            (response: any) => this.movie = response,
            (error: any) => console.log(error)
        );
    }
}

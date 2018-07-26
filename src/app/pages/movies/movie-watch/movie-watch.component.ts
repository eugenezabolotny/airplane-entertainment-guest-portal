import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../movies.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-movie-watch',
    templateUrl: './movie-watch.component.html',
    styleUrls: ['./movie-watch.component.scss']
})
export class MovieWatchComponent implements OnInit {
    private movie: any;

    constructor(private moviesService: MoviesService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getMovie(+this.route.snapshot.paramMap.get('id'));
    }

    getMovie(movieId: number) {
        this.moviesService.getMovie(movieId).subscribe(
            (response: any) => this.movie = this.moviesService.preparePathToMovie(response[0]),
            (error: any) => console.log(error)
        );
    }

}

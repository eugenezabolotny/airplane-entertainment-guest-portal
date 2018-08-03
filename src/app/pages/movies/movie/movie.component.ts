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

    constructor(private moviesService: MoviesService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        console.log(+this.route.snapshot.paramMap.get('id'));
        this.getMovie(+this.route.snapshot.paramMap.get('id'));
    }

    getMovie(movieId: number) {
        this.moviesService.getMovie(movieId).subscribe(
            (response: any) => {
              console.log(response);
              this.movie = response
            },
            (error: any) => console.log(error)
        );
    }
}

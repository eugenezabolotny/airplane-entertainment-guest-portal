import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'app-test-player',
    templateUrl: './test-player.component.html',
    styleUrls: ['./test-player.component.scss']
})
export class TestPlayerComponent implements OnInit {
    private testMovie: any;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get('api/movie/view/2').subscribe(
            (response: any) => this.testMovie = response[0],
            (error: any) => console.warn(error)
        );
    }

}

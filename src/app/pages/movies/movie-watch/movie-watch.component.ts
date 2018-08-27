import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { VgAPI } from 'videogular2/core';
import { SocketService } from "../../../socket.service";

@Component({
    selector: 'app-movie-watch',
    templateUrl: './movie-watch.component.html',
    styleUrls: ['./movie-watch.component.scss']
})

export class MovieWatchComponent implements OnInit {
    public movie: any;
    public playerApi: VgAPI;
    public bitrates: any = {name: 'test'};
    announcementMessage: string;

    constructor(private moviesService: MoviesService,
                private route: ActivatedRoute,
                private socketService: SocketService) {
    }

    ngOnInit() {
        this.getMovie(+this.route.snapshot.paramMap.get('id'));
        // TODO: uncomment to enable socket
        // this.socketService.announcementMessage.subscribe(
        //     message => {
        //         this.announcementMessage = message;
        //         if (this.announcementMessage === 'stop') {
        //             this.onPlay();
        //         } else if (this.announcementMessage === 'play') {
        //             this.onStop();
        //         }
        //     });
    }

    getMovie(movieId: number) {
        this.moviesService.getMovie(movieId).subscribe(
            (response: any) => {
                this.movie = response;
                this.movie.path = this.moviesService.preparePathToMovie(response);
            },
            (error: any) => console.log(error)
        );
    }

    onPlayerReady(api: VgAPI) {
        this.playerApi = api;

        //play video
        this.playerApi.getDefaultMedia().subscriptions.canPlay.subscribe(() => {
            this.playerApi.play();
        });

        //auto replay video
        this.playerApi.getDefaultMedia().subscriptions.ended.subscribe(() => {
            this.playerApi.getDefaultMedia().currentTime = 0;
        });
    }

    onStop() {
        this.playerApi.pause();
    }

    onPlay() {
        this.playerApi.play();
    }
}

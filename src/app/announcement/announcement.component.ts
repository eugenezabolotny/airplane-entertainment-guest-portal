import { Component, OnInit } from '@angular/core';
import { SocketService } from "../socket.service";
import { VgAPI } from "videogular2/core";

@Component({
    selector: 'app-announcement',
    templateUrl: './announcement.component.html',
    styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {
    public msgInput = 'message from guest';
    public isAnnouncement = false;
    public mediaUrl: string;
    public playerApi: VgAPI;

    constructor(private socketService: SocketService) { }

    ngOnInit() {
        this.socketService.onNewMessage().subscribe(msg => {
            if (msg !== 'stop') {
                this.isAnnouncement = true;
                this.mediaUrl = msg;
                this.onAnnouncement();
            } else {
                this.isAnnouncement = false;
                this.mediaUrl = '';
                this.onStop();
            }
        });
    }

    sendMsg() {
        this.socketService.sendMessage(this.msgInput);
    }

    onPlayerReady(api: VgAPI) {
        this.playerApi = api;
    }

    onAnnouncement() {
        //play video
        this.playerApi.getDefaultMedia().subscriptions.canPlay.subscribe(() => {
            this.playerApi.play();
        });

        //remove layer when playback completes
        this.playerApi.getDefaultMedia().subscriptions.ended.subscribe(() => {
            this.isAnnouncement = false;
            this.mediaUrl = '';
        });
    }

    onStop() {
        this.playerApi.pause();
    }
}

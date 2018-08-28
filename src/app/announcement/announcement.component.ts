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
    announcementMessage: string;


    // TODO: uncomment all below to enable socket
    constructor(private socketService: SocketService) { }

    ngOnInit() {
        // this.socketService.onNewMessage().subscribe(msg => {
        //     if (msg !== 'stop') {
        //         this.onAnnouncement(msg);
        //     } else {
        //         this.onStop();
        //     }
        // });
        // this.socketService.announcementMessage.subscribe(
        //     message => this.announcementMessage = message);
    }

    sendMsg() {
        // this.socketService.sendMessage(this.msgInput);
    }

    onPlayerReady(api: VgAPI) {
        this.playerApi = api;
    }

    newAnnouncementMessage(msg: string) {
        // this.socketService.changeAnnouncementMessage(msg);
    }

    onAnnouncement(msg) {
        this.isAnnouncement = true;
        this.mediaUrl = msg;
        this.playerApi.getDefaultMedia().subscriptions.canPlay.subscribe(() => {
            this.playerApi.play();
            this.newAnnouncementMessage('play');
        });

        this.playerApi.getDefaultMedia().subscriptions.ended.subscribe(() => {
            this.isAnnouncement = false;
            this.mediaUrl = '';
            this.newAnnouncementMessage('stop');
        });
    }

    onStop() {
        this.isAnnouncement = false;
        this.mediaUrl = '';
        this.playerApi.pause();
        this.newAnnouncementMessage('stop');
    }
}

import { Component, OnInit } from '@angular/core';
import { SocketService } from "../socket.service";

@Component({
    selector: 'app-announcement',
    templateUrl: './announcement.component.html',
    styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {
    msgInput = 'message from guest';

    constructor(private socketService: SocketService) { }

    ngOnInit() {
        this.socketService.onNewMessage().subscribe(msg => {
            console.log('got a msg: ' + msg);
        });
    }

    sendMsg() {
        this.socketService.sendMessage(this.msgInput);
    }
}

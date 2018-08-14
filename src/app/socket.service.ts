import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { BehaviorSubject } from "rxjs";

@Injectable()
export class SocketService {
    private host = 'http://localhost:5000';
    private socket: any;
    private announcementMessageSource = new BehaviorSubject('default message');
    announcementMessage = this.announcementMessageSource.asObservable();

    constructor() {
        this.socket = io(this.host);
        this.socket.on('connect', () => this.onConnect());
        this.socket.on('disconnect', () => this.onDisconnect());
    }

    onConnect() {
        this.socket.connect();
    }

    onDisconnect() {
        this.socket.disconnect();
    }

    // EMITTER
    sendMessage(msg: string) {
        this.socket.emit('message', msg);
    }

    // HANDLER
    onNewMessage() {
        return Observable.create(observer => {
            this.socket.on('guest', msg => {
                observer.next(msg);
            });
        });
    }

    changeAnnouncementMessage(message: string) {
        this.announcementMessageSource.next(message);
    }
}

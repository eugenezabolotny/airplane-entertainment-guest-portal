import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable()
export class SocketService {
    private host = 'http://localhost:5000';
    private socket: any;

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
            this.socket.on('play', msg => {
                observer.next(msg);
            });
        });
    }
}

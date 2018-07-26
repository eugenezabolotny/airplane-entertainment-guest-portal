import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
    private _opened = false;

    private onToggledSideBar(opened: boolean) {
        this._opened = opened;
    }

    constructor() {
    }

    ngOnInit() {
    }

}

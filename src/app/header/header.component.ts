import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() opened: boolean;
    @Output() onToggledSideBar = new EventEmitter<boolean>();

    private toggleSidebar() {
        this.opened = !this.opened;
        this.onToggledSideBar.emit(this.opened);
    }

    constructor() {
    }

    ngOnInit() {
    }

}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-notice-detail',
    templateUrl: './notice-detail.component.html',
    styleUrls: ['./notice-detail.component.scss']
})
export class NoticeDetailComponent implements OnInit {

    constructor() { }

    drawerVisible: boolean = false;

    ngOnInit(): void { }

    openDrawer(): void {
        this.drawerVisible = true;
    }

    closeDrawer(): void {
        this.drawerVisible = false;
    }

}

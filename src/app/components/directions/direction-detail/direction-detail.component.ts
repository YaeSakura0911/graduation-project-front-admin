import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-direction-detail',
    templateUrl: './direction-detail.component.html',
    styleUrls: ['./direction-detail.component.scss']
})
export class DirectionDetailComponent implements OnInit {

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

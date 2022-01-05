import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-student-detail',
    templateUrl: './student-detail.component.html',
    styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

    constructor() { }

    drawerVisible: boolean = false;

    ngOnInit(): void {
    }

    openDrawer(): void {
        this.drawerVisible = true;
    }

    closeDrawer(): void {
        this.drawerVisible = false;
    }

}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-teacher-detail',
    templateUrl: './teacher-detail.component.html',
    styleUrls: ['./teacher-detail.component.scss']
})
export class TeacherDetailComponent implements OnInit {

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

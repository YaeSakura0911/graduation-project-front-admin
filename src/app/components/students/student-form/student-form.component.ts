import { Component, OnInit } from '@angular/core';

import { differenceInCalendarDays } from 'date-fns';

@Component({
    selector: 'app-student-form',
    templateUrl: './student-form.component.html',
    styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

    constructor() { }

    drawerVisible: boolean = false;
    drawerTitle: string | undefined;
    today: Date = new Date();
    disabledYear = (current: Date): boolean =>
        differenceInCalendarDays(current, this.today) > 0;
    // Can not select days before today and today

    ngOnInit(): void { }

    openDrawer(isEdit: boolean): void {
        // 编辑表单
        if (isEdit) {
            this.drawerTitle = "编辑学生"
        }
        // 新建表单
        else {
            this.drawerTitle = "新建学生"
        }
        this.drawerVisible = true;
    }

    closeDrawer(): void {
        this.drawerVisible = false;
    }

}

import { Component, Input, OnInit } from '@angular/core';

import { differenceInCalendarDays } from 'date-fns';

@Component({
    selector: 'app-teacher-form',
    templateUrl: './teacher-form.component.html',
    styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent implements OnInit {

    constructor() { }

    @Input() isEdit: boolean | undefined;

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
            this.drawerTitle = "编辑教师"
        }
        // 新建表单
        else {
            this.drawerTitle = "新建教师"
        }
        this.drawerVisible = true;
    }

    closeDrawer(): void {
        this.drawerVisible = false;
    }

}

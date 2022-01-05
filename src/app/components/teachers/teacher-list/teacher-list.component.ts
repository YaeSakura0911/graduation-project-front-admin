import { Component, OnInit, ViewChild } from '@angular/core';

import { NzMessageService } from 'ng-zorro-antd/message';

import { TeacherDetailComponent } from '../teacher-detail/teacher-detail.component';
import { TeacherFormComponent } from '../teacher-form/teacher-form.component';

@Component({
    selector: 'app-teacher-list',
    templateUrl: './teacher-list.component.html',
    styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {

    constructor(private messageService: NzMessageService) { }

    @ViewChild('teacherForm')
    private teacherForm: TeacherFormComponent | undefined;
    @ViewChild('teacherDetail')
    private teacherDetail: TeacherDetailComponent | undefined;

    ngOnInit(): void { }

    // 打开表单抽屉
    openFormDrawer(isEdit: boolean): void {
        this.teacherForm?.openDrawer(isEdit);
    }

    // 打开详情抽屉
    openDetailDrawer(): void {
        this.teacherDetail?.openDrawer();
    }

    // 删除教师
    deleteTeacher(teacherId: string) {
        // 发起请求
        // 请求成功
        this.messageService.create('success', '删除成功！');
    }

}

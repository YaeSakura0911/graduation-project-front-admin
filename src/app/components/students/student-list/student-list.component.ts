import { Component, OnInit, ViewChild } from '@angular/core';

import { NzMessageService } from 'ng-zorro-antd/message';
import { StudentDetailComponent } from '../student-detail/student-detail.component';
import { StudentFormComponent } from '../student-form/student-form.component';

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

    constructor(private messageService: NzMessageService) { }

    @ViewChild('studentForm')
    private studentForm: StudentFormComponent | undefined;
    @ViewChild('studentDetail')
    private studentDetail: StudentDetailComponent | undefined;

    ngOnInit(): void { }

    // 打开表单抽屉
    openFormDrawer(isEdit: boolean): void {
        this.studentForm?.openDrawer(isEdit);
    }

    // 打开详情抽屉
    openDetailDrawer(): void {
        this.studentDetail?.openDrawer();
    }

    // 删除学生
    deleteStudent(studentId: string) {
        // 发起请求
        // 请求成功
        this.messageService.create('success', '删除成功!');
    }

}

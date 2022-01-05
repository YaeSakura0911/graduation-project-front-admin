import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-notice-form',
    templateUrl: './notice-form.component.html',
    styleUrls: ['./notice-form.component.scss']
})
export class NoticeFormComponent implements OnInit {

    constructor() { }

    @Input() isEdit: boolean | undefined;

    drawerVisible: boolean = false;
    drawerTitle: string | undefined;

    ngOnInit(): void { }

    openDrawer(isEdit: boolean): void {
        // 编辑表单
        if (isEdit) {
            this.drawerTitle = "编辑公告"
        }
        // 新建表单
        else {
            this.drawerTitle = "新建公告"
        }
        this.drawerVisible = true;
    }

    closeDrawer(): void {
        this.drawerVisible = false;
    }

}

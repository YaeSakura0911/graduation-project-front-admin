import { Component, OnInit, ViewChild } from '@angular/core';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NoticeDetailComponent } from '../notice-detail/notice-detail.component';
import { NoticeFormComponent } from '../notice-form/notice-form.component';


@Component({
    selector: 'app-notice-list',
    templateUrl: './notice-list.component.html',
    styleUrls: ['./notice-list.component.scss']
})
export class NoticeListComponent implements OnInit {

    constructor(private messageService: NzMessageService) { }

    @ViewChild('noticeForm')
    private noticeForm: NoticeFormComponent | undefined;
    @ViewChild('noticeDetail')
    private noticeDetail: NoticeDetailComponent | undefined;
    
    ngOnInit(): void { }

    // 打开抽屉
    openFormDrawer(isEdit: boolean): void {
        this.noticeForm?.openDrawer(isEdit);
    }

    // 打开详情抽屉
    openDetailDrawer(): void {
        this.noticeDetail?.openDrawer();
    }

    // 发布公告
    releaseNotice() {
        // 发起请求
        // 请求成功
        this.messageService.create('success', '发布成功!');
    }

    // 删除公告
    deleteNotice(noticeId: string) {
        // 发起请求
        // 请求成功
        this.messageService.create('success', '删除成功!');
    }

}

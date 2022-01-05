import { Component, OnInit, ViewChild } from '@angular/core';

import { NzMessageService } from 'ng-zorro-antd/message';

import { DirectionDetailComponent } from '../direction-detail/direction-detail.component';
import { DirectionFormComponent } from '../direction-form/direction-form.component';

@Component({
    selector: 'app-direction-list',
    templateUrl: './direction-list.component.html',
    styleUrls: ['./direction-list.component.scss']
})
export class DirectionListComponent implements OnInit {

    constructor(private messageService: NzMessageService) { }

    @ViewChild('directionForm')
    private directionForm: DirectionFormComponent | undefined;
    @ViewChild('directionDetail')
    private directionDetail: DirectionDetailComponent | undefined;

    ngOnInit(): void { }

    // 打开抽屉
    openDrawer(isEdit: boolean): void {
        this.directionForm?.openDrawer(isEdit);
    }

    // 打开详情抽屉
    openDetailDrawer(): void {
        this.directionDetail?.openDrawer();
    }

    // 删除研究方向
    deleteDirection(directionId: string) {
        // 发起请求
        // 请求成功
        this.messageService.create('success', '删除成功!');
    }

}

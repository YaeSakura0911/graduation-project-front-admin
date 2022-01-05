import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 通用
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
// 布局
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
// 数据录入
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
// 数据展示
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
// 反馈
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

import { NoticeRoutingModule } from 'src/app/routers/notice-routing.modules';

import { NoticeListComponent } from 'src/app/components/notices/notice-list/notice-list.component';
import { NoticeFormComponent } from 'src/app/components/notices/notice-form/notice-form.component';
import { NoticeDetailComponent } from 'src/app/components/notices/notice-detail/notice-detail.component';

@NgModule({
    declarations: [
        NoticeListComponent,
        NoticeFormComponent,
        NoticeDetailComponent
    ],
    imports: [
        CommonModule,
        NoticeRoutingModule,
        NzButtonModule,
        NzIconModule,
        NzTypographyModule,
        NzDividerModule,
        NzGridModule,
        NzFormModule,
        NzInputModule,
        NzSelectModule,
        NzDescriptionsModule,
        NzTableModule,
        NzTagModule,
        NzDrawerModule,
        NzMessageModule,
        NzPopconfirmModule
    ]
})
export class NoticeModule { }

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
import { NzTableModule } from 'ng-zorro-antd/table';
// 反馈
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

import { DirectionRoutingModule } from 'src/app/routers/direction-routing.module';

import { DirectionListComponent } from 'src/app/components/directions/direction-list/direction-list.component';
import { DirectionDetailComponent } from 'src/app/components/directions/direction-detail/direction-detail.component';
import { DirectionFormComponent } from 'src/app/components/directions/direction-form/direction-form.component';

@NgModule({
    declarations: [
        DirectionListComponent,
        DirectionDetailComponent,
        DirectionFormComponent
    ],
    imports: [
        CommonModule,
        DirectionRoutingModule,
        NzButtonModule,
        NzIconModule,
        NzTypographyModule,
        NzDividerModule,
        NzGridModule,
        NzFormModule,
        NzInputModule,
        NzSelectModule,
        NzTableModule,
        NzDrawerModule,
        NzMessageModule,
        NzPopconfirmModule
    ]
})

export class DirectionModule { }

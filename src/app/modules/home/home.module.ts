import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 通用
import { NzIconModule } from 'ng-zorro-antd/icon';
// 布局
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
// 导航
import { NzMenuModule } from 'ng-zorro-antd/menu';
// 数据展示
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { HomeRoutingModule } from 'src/app/routers/home-routing.module';

import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        NzIconModule,
        NzGridModule,
        NzLayoutModule,
        NzMenuModule,
        NzToolTipModule
    ]
})

export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 通用
import { NzIconModule } from 'ng-zorro-antd/icon';
// 布局
import { NzLayoutModule } from 'ng-zorro-antd/layout';
// 导航
import { NzMenuModule } from 'ng-zorro-antd/menu';

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
        NzLayoutModule,
        NzMenuModule
    ]
})

export class HomeModule { }

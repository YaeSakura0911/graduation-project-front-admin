import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// 通用
import { NzButtonModule } from 'ng-zorro-antd/button';
// 布局
import { NzLayoutModule } from 'ng-zorro-antd/layout';
// 数据录入
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

import { UserRoutingModule } from 'src/app/routers/user-routing.module';

import { UserComponent } from './user.component';
import { UserLoginComponent } from 'src/app/components/users/user-login/user-login.component';

@NgModule({
  declarations: [
    UserComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzLayoutModule,
    NzCheckboxModule,
    NzFormModule,
    NzInputModule
  ]
})
export class UserModule { }

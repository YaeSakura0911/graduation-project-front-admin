import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from 'src/app/routers/teacher-routing.module';

import { TeacherListComponent } from 'src/app/components/teachers/teacher-list/teacher-list.component';

@NgModule({
    declarations: [
        TeacherListComponent
    ],
    imports: [
        CommonModule,
        TeacherRoutingModule
    ]
})

export class TeacherModule { }

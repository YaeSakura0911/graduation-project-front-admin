import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "../modules/home/home.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'direction', loadChildren: () => import('../modules/direction/direction.module').then(m => m.DirectionModule) },
            { path: 'teacher', loadChildren: () => import('../modules/teacher/teacher.module').then(m => m.TeacherModule) },
            { path: 'student', loadChildren: () => import('../modules/student/student.module').then(m => m.StudentModule) },
            { path: 'notice', loadChildren: () => import('../modules/notice/notice.module').then(m => m.NoticeModule) },
            { path: '', redirectTo: '/direction', pathMatch: 'full' }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule { }
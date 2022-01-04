import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TeacherListComponent } from "../components/teachers/teacher-list/teacher-list.component";

const routes: Routes = [
    { path: '', component: TeacherListComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TeacherRoutingModule { }
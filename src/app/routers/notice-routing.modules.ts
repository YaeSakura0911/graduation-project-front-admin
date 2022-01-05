import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NoticeListComponent } from "../components/notices/notice-list/notice-list.component";

const routes: Routes = [
    { path: '', component: NoticeListComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class NoticeRoutingModule { }
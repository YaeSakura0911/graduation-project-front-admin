import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DirectionListComponent } from "../components/directions/direction-list/direction-list.component";

const routes: Routes = [
    { path: '', component: DirectionListComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DirectionRoutingModule { }
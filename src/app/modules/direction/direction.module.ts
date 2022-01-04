import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectionRoutingModule } from 'src/app/routers/direction-routing.module';

import { DirectionListComponent } from 'src/app/components/directions/direction-list/direction-list.component';

@NgModule({
    declarations: [
        DirectionListComponent
    ],
    imports: [
        CommonModule,
        DirectionRoutingModule
    ]
})

export class DirectionModule { }

import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-direction-form',
    templateUrl: './direction-form.component.html',
    styleUrls: ['./direction-form.component.scss']
})
export class DirectionFormComponent implements OnInit {

    constructor() { }

    @Input() isEdit: boolean | undefined;

    drawerVisible: boolean = false;
    drawerTitle: string | undefined;

    ngOnInit(): void { }

    openDrawer(isEdit: boolean): void {
        // 编辑表单
        if(isEdit) {
            this.drawerTitle = "编辑研究方向"
        }
        // 新建表单
        else {
            this.drawerTitle = "新建研究方向"
        }
        this.drawerVisible = true;
    }

    closeDrawer(): void {
        this.drawerVisible = false;
    }

}

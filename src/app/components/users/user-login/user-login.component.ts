import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

    loginForm = this.formBuilder.group({
        // TODO: 表单验证
        username: [''],
        password: [''],
    });

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void { }

    submitLoginForm(): void {
        // TODO: 验证登录信息并将id存入sessionStorage
        // TODO: 跳转去主页
    }

}

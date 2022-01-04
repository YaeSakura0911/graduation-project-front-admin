import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserLoginComponent } from "../components/users/user-login/user-login.component";
import { UserComponent } from "../modules/user/user.component";

const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            { path: 'login', component: UserLoginComponent },
            { path: '', redirectTo: '/user/login', pathMatch: 'full' }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'list',component:ListComponent,canActivate:[AuthGuard], children:[
    {path:'view/:num',component:ViewComponent},
    {path:'edit/:gopal',component:EditComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

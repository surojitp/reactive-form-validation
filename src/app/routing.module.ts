import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

import {RouterModule,Routes} from '@angular/router';

import { EmployeeComponent} from './employee/employee.component';
//import { EmployeeListComponent} from './employee/employee-list/employee-list.component';
import {HomeComponent} from './home/home.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', redirectTo:'home' ,pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'employee/:code',component:EmployeeComponent},
  //{path:'employeeList',component:EmployeeListComponent},
  {path:'employeeList',loadChildren:'../employee-list/employeeList.module#EmployeeListModule'},
  {path:'create',loadChildren:'../create-employee/create-employee.module#CreateEmployeeModule'},
  {path:'create/:id',loadChildren:'../create-employee/create-employee.module#CreateEmployeeModule'},
  {path:'**',component:PageNotFoundComponent}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false })
  ]
  ,exports: [RouterModule]
})
export class RoutingModule { }

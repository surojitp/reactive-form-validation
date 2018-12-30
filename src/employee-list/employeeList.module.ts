import {NgModule} from '@angular/core';
import {routing} from './employeeList.route';
import { FormsModule } from '@angular/forms';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {EmployeeTitlePipe} from '../app/employee/employeeTitle.pipe';

import {EmployeeListComponent} from './employee-list.component';
import {EmployeeCountComponent} from '../app/employee/employee-count/employee-count.component';

@NgModule({
  imports:[FormsModule,CommonModule,routing],
  declarations:[EmployeeTitlePipe,EmployeeListComponent,EmployeeCountComponent]
})

export class EmployeeListModule{

}
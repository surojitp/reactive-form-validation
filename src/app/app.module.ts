import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
//import { EmployeeListComponent } from './employee/employee-list/employee-list.component';

//import {EmployeeTitlePipe} from './employee/employeeTitle.pipe';
//import { EmployeeCountComponent } from './employee/employee-count/employee-count.component';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

import {RoutingModule} from './routing.module';
import {EmployeeService} from './employee.service';
import { CustomDirectiveDirective } from './custom-directive.directive';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ClassBindingComponent,
    //EmployeeListComponent,
    //EmployeeTitlePipe,
    //EmployeeCountComponent,
    LifecycleHookComponent,
    HomeComponent,
    PageNotFoundComponent,
    CustomDirectiveDirective
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

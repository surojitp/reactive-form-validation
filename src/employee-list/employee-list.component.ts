import { Component, OnInit } from '@angular/core';

import {IEmployee} from '../app/employee/employeeInterface'
import {EmployeeService} from '../app/employee.service';

import {UserPreferenceService} from '../app/user-preference.service';

import {Http} from '@angular/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers:[EmployeeService]
})
export class EmployeeListComponent implements OnInit {

  employees:IEmployee[];

  selectedEmployeeRadioButton:string = "All";
  statusMessage = "Loading data... "

  constructor(private employeeService: EmployeeService, private _UserPreferenceService:UserPreferenceService) { 

    
  }


  get color(){
    return this._UserPreferenceService.colorPreference;
  }

  set color(val){
    this._UserPreferenceService.colorPreference = val
  }

  ngOnInit() {

    //this.employees = this.employeeService.getEmployee();
    this.employeeService.getEmployee()
    .subscribe(r=>{
      this.employees = r
      ,error=>{
        this.statusMessage="Problem With service";
        console.error(error);
        
      }
      
    })
  }


  getEmployees():void{
    this.employees = [
      // {code:"001", name:"Surojit", gender:"Male", anulSalary:5500,dateOfBirth: "3/25/1980"},
      // {code:"002", name:"Vimal", gender:"Male", anulSalary:8500.65,dateOfBirth: "5/25/1982"},
      // {code:"003", name:"Kunal", gender:"Male", anulSalary:4500,dateOfBirth: "07/05/1985"},
      // {code:"004", name:"Max", gender:"Male", anulSalary:5000.45,dateOfBirth: "05/21/1973"},
      // {code:"005", name:"Mary", gender:"Female", anulSalary:6500,dateOfBirth: "10/25/1982"},
      // {code:"006", name:"Hari", gender:"Male", anulSalary:4500,dateOfBirth: "10/12/1982"}
    ]
  }

  tracByEmployeeCode(index:number,employee:any):string{
    return employee.code;
  }

  getTotalEmployeesCount():number{
    return this.employees.length;
  }

  getTotalMaleEmployeesCount():number{
    return this.employees.filter(e => e.gender === "Male").length;
  }

  getTotalFemaleEmployeesCount():number{
    return this.employees.filter(e => e.gender === "Female").length;
  }

  onEmployeeCountRadioButtonChange(val){
    this.selectedEmployeeRadioButton = val

    
  }


  
}

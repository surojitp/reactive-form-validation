import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {EmployeeService} from '../employee.service';

import {IEmployee} from './employeeInterface';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {

  columSpan: number=2;

  firstName: string = "Surojit"
  lastName: string = "Paul"
  gender: string = "Male"
  age: number = 31

  showDetails:boolean =false;

  empData:IEmployee;
  statusMessage:string = "Loading data..";

  constructor(private _EmployeeService:EmployeeService, 
              private _ActivateRoutes: ActivatedRoute,
              private _Route:Router){

  }

  onBackButtonClick(){
    this._Route.navigate(['employeeList']);
  }

  toggleDetails(){
    this.showDetails = !this.showDetails;
  }

  

  ngOnInit() {

    let EmpCode = this._ActivateRoutes.snapshot.params['code'];
  //   this._EmployeeService.getSingleEmployee(EmpCode).subscribe((result) =>{
  //     if(result==null){
  //        this.statusMessage = "Employee does not exist"                                                                                  
  //     }
  //     else{
  //       this.empData = result;
  //     }
      
  //   })
  //   ,error=>{
  //     this.statusMessage="Problem With service";
  //     console.error(error);
      
  //   }
 

  this._EmployeeService.getSingleEmployeePromises(EmpCode)
                        .then((result) =>{
                              if(result==null){
                                 this.statusMessage = "Employee does not exist"                                                                                  
                              }
                              else{
                                this.empData = result;
                              }
                              
                          })
                          .catch(error=>{
                            this.statusMessage="Problem With service";
                            console.error(error);
                          })
  }
}

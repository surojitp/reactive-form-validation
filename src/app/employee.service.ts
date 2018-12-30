import {Injectable} from "@angular/core";
import {IEmployee} from "./employee/employeeInterface";

import {Http,Response} from '@angular/http';
import {HttpErrorResponse} from '@angular/common/http'
import {Observable,of} from 'rxjs';

//import  'rxjs/add/operator/toPromise';
//import { Observable } from 'rxjs/Observable';

import { map,catchError } from "rxjs/operators";
import { jsonpFactory } from '@angular/http/src/http_module';
//import {catchError} from "rxjs/internal/operators";
//import {Router} from "@angular/router";


@Injectable()
export class EmployeeService{
  data:IEmployee[] = [];
  constructor(private _http: Http){

  }
  
  getEmployee():Observable<IEmployee[]>{
    // return [
    //   {code:"001", name:"Surojit", gender:"Male", anulSalary:5500,dateOfBirth: "3/25/1980"},
    //   {code:"002", name:"Vimal", gender:"Male", anulSalary:8500.65,dateOfBirth: "5/25/1982"},
    //   {code:"003", name:"Kunal", gender:"Male", anulSalary:4500,dateOfBirth: "07/05/1985"},
    //   {code:"004", name:"Max", gender:"Male", anulSalary:5000.45,dateOfBirth: "05/21/1973"},
    //   {code:"005", name:"Mary", gender:"Female", anulSalary:6500,dateOfBirth: "10/25/1982"}
    // ]

    let url = 'http://localhost:3000/employee/';

    

    return this._http.get(url)
                     .pipe
                     (
                       map((responce: Response) =>{
                       var r = responce.json().data

                       for(let res in r){

                        var obj:any = {
                          code:r[res].code, 
                          name:r[res].name, 
                          gender:r[res].gender, 
                          anulSalary:r[res].anulSalary,
                          dateOfBirth: r[res].dateOfBirth}
                        
                        this.data.push(obj)

                        //console.log(obj);
                        

                       }

                       return this.data;
                       
                     }),
                      catchError((error, caught) => {
                        //intercept the respons error and displace it to the console
                        console.log(error);
                        this.handleAuthError(error);
                        return of(error);
                      })
                  )
                    
  }

  getSingleEmployee(code):Observable<IEmployee>{
    
    let url = 'http://localhost:3000/employee/'+code;

    

    return this._http.get(url)
                     .pipe
                     (
                       map((responce: Response) =>{
                      //  var r = responce.json().data

                      //  for(let res in r){

                      //   var obj:IEmployee = {
                      //     code:r[res].code, 
                      //     name:r[res].name, 
                      //     gender:r[res].gender, 
                      //     anulSalary:r[res].anulSalary,
                      //     dateOfBirth: r[res].dateOfBirth}
                        
                      //   this.data.push(obj)

                      //   //console.log(obj);
                        

                      //  }

                      //  return this.data;
                      return responce.json().data;
                       
                     }),
                      catchError((error, caught) => {
                        //intercept the respons error and displace it to the console
                        console.log(error);
                        this.handleAuthError(error);
                        return of(error);
                      })
                  )
                    
  }

  getSingleEmployeePromises(code):Promise<IEmployee>{
    let url = 'http://localhost:3000/employee/'+code;
    return this._http.get(url)
                .pipe(
                  map(response => response.json().data)
                )
                .toPromise()
                .catch(this.handelPromisesError)
  }

  handelPromisesError(error:any):any{
    console.log(error)
    throw error;
    
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    //handle your auth error or rethrow
    if (err.status === 401) {
      //navigate /delete cookies or whatever
      console.log('handled error ' + err);
      //this.router.navigate([`/login`]);
      // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
      return of(err.message);
    }
    throw err;
  }
}
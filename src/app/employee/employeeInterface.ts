export interface IEmployee{
  code:any;
  name:any;
  gender: any;
  anulSalary: any;
  dateOfBirth: any;
  contactPreference: String;
  email: String;
  phone: String;
  skills: any;
  // depertment?: string;

  // computeMonthlySalary(anulSalary: number): number;
}

// export class Employee implements IEmployee{

//   constructor(public code:string, public name:string, public gender:string, public anulSalary:number, public dateOfBirth:string){

//   }

//   computeMonthlySalary(anulSalary: number):number{
//     return anulSalary/12;
//   }
// }


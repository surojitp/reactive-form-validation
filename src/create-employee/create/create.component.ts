//import { EmployeeService } from './../../app/employee.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators, FormBuilder, AbstractControl, FormArray } from '@angular/forms';

import {ActivatedRoute} from '@angular/router';
import {CustomValidators} from '../../shared/custom.validators'
import {EmployeeService} from  '../../app/employee.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  employeeForm: FormGroup;

  emailControl: any;

  validationMessages ={
    'fullName':{
      'required': 'Full Name is Required',
      'minlength': 'Full Name must be grater than 2 characters',
      'maxlength': 'Full Name must be less than 10 characters'
    },
    'email':{
      'required': 'Email is Required',
      'emailDomain': 'aa'
    },
    'confirmEmail':{
      'required': 'Confirm Email is Required'
    },
    'emailGroup': {
      'emailMissmatch': 'Email and Confirm email do not match !'
    },
    'phone':{
      'required': 'Phone is Required',
    },
    'skillName':{
      'required': 'Skill Name is Required',
    },
    'experienceInYear':{
      'required': 'Experience In Year is Required',
    },
    'proficiency':{
      'required': 'Proficiency is Required',
    }
    
  }

  formErrors = {
    'fullName': "",
    'email':"",
    'confirmEmail':"",
    'emailGroup':"",
    'phone':"",
    'skillName': "",
    'experienceInYear': "",
    'proficiency': ""
    
  }

  constructor( private fb?: FormBuilder, private route?: ActivatedRoute, private employeeService?: EmployeeService) {
    
  }
   

  ngOnInit() {
    
    this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      contactPreference:['email'],
      emailGroup: this.fb.group({
        email: ['', [Validators.required,CustomValidators.emailDomain('gmail.com')]],
        confirmEmail: ['', Validators.required]
      }, {validator: matchEmail}),      
      phone: [''],
      skills:this.fb.array([
        this.addSkillGroup()
      ])
    })

     this.emailControl  = this.employeeForm.get('emailGroup').get('email')

    // this.emailControl.setValidators([Validators.required,CustomValidators.emailDomain('gmail.com')])

    //this.employeeForm.get('email').setValidators(Validators.required)

    this.employeeForm.valueChanges.subscribe((data)=>{
      this.logValidationError(this.employeeForm);
      
      
    })

    this.employeeForm.get('contactPreference').valueChanges.subscribe(data =>{
      this.onContactPreferenceChange(data)
    })

    this.route.paramMap.subscribe(params =>{
      const empId= params.get("id");
      console.log(empId);
      if(empId){
        this.getEmployee(empId);
      }
      
    })

    // this.employeeForm = new FormGroup({
    //   fullName: new FormControl(),
    //   email: new FormControl(),
    //   //create skill from form group
    //   skills:new FormGroup({
    //     skillName: new FormControl(),
    //     experienceInYear: new FormControl(),
    //     proficiency: new FormControl()
    //   })
    // })
  }

  getEmployee(empId){
    this.employeeService.getSingleEmployee(empId).subscribe((employeeData) =>{
      //console.log(employeeData.skills[0]);
      this.editEmployee(employeeData)
      },
      (error)=> console.log(error)
      
    )
  }
  editEmployee(employee){
    this.employeeForm.patchValue({
      fullName: employee.name,
      contactPreference: employee.contactPreference,
      emailGroup: {
        email: employee.email,
        confirmEmail: employee.email
      },      
      phone: employee.phone
    })

    this.employeeForm.setControl('skills', this.setExistingSkill(employee.skills))
  }
  setExistingSkill(skillSets): FormArray{
    const formArray = new FormArray([]);
    
    skillSets.forEach(s => {
      
      
      let fg = this.fb.group({
                  skillName: s.skillName,
                  experienceInYear: s.experienceInYear,
                  proficiency: s.proficiency
                })
      formArray.push(fg);
    });

    return formArray;
  }

  addSkillButtonClick(){
    (<FormArray>this.employeeForm.get("skills")).push(this.addSkillGroup())
  }

  removeSkillButtonClick(skillIndex){
    const skillFormArray = <FormArray>this.employeeForm.get('skills');
    skillFormArray.removeAt(skillIndex);
    skillFormArray.markAsDirty();
    skillFormArray.markAsTouched();
  }

  addSkillGroup(): FormGroup{
    return this.fb.group({
      skillName: ['', Validators.required],
      experienceInYear: ['', Validators.required],
      proficiency: ['', Validators.required]
    })
  }

  

  onContactPreferenceChange(selectedValue: String){
    //alert(selectedValue)
    const phoneControl = this.employeeForm.get('phone');
    

    if(selectedValue === 'phone'){
      phoneControl.setValidators([Validators.required, Validators.minLength(5)])
      this.emailControl.clearValidators()
    }
    else{
      this.emailControl.setValidators([Validators.required,CustomValidators.emailDomain('gmail.com')])
       
      phoneControl.clearValidators()
    }

    phoneControl.updateValueAndValidity()
    this.emailControl.updateValueAndValidity()
  }

  logValidationError(group: FormGroup=this.employeeForm):void{
    //console.log(Object.keys(group.controls));
    Object.keys(group.controls).forEach((key)=>{
      //console.log(group.get(key).value);
      const abstractControl = group.get(key);

      //console.log(`key= ${key} value=${abstractControl.value}`);
      this.formErrors[key] = ''
      if(abstractControl && !abstractControl.valid && (abstractControl.dirty || abstractControl.touched || abstractControl.value !== '')){

        const message = this.validationMessages[key]
        //console.log(message);
        //console.log(abstractControl);

        for(const errorKey in abstractControl.errors) {
          //console.log("error key--"+errorKey);
          
          if(errorKey){
            this.formErrors[key] += message[errorKey]+' ';
          }
        }
      }

      if(abstractControl instanceof FormGroup){
        this.logValidationError(abstractControl);
      }

      if(abstractControl instanceof FormArray){
        //console.log(abstractControl);
        
        var control: any;
        for(control in abstractControl.controls){

          
          const arrayControlGroup = abstractControl.controls[control]
          
          if(arrayControlGroup instanceof FormGroup){
                       
            this.logValidationError(arrayControlGroup);
          }
        }
        
      }
      
    })

    
  }

  onLoadDataClick():void{

    // this.logValidationError(this.employeeForm);
    
     
    
    // this.employeeForm.setValue({
    //   fullName: "Surojit Paul",
    //   email:"suroji@email.com",
    //   // skills:{
    //   //   skillName: "PHP",
    //   //   experienceInYear: "5",
    //   //   proficiency: "intermediate"
    //   // }
    // })

    // this.employeeForm.patchValue({
    //   fullName: "Surojit Paul",
    //   email:"suroji@email.com",
    //   // skills:{
    //   //   skillName: "PHP",
    //   //   experienceInYear: "5",
    //   //   proficiency: "intermediate"
    //   // }
    // })
  }

  onSubmit():void{
    console.log(this.employeeForm.value);
    
  }
  
 


}


function matchEmail(group: AbstractControl): {[key:string]: any} | null{
  const emailControl = group.get('email');
  const confirmEmailControl = group.get('confirmEmail');

  if(emailControl.value === confirmEmailControl.value || (confirmEmailControl.pristine && confirmEmailControl.value === "")){
    return null;
  }
  else{
    return {'emailMissmatch': true}
  }
}




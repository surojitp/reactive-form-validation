import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPreferenceService {

  constructor() {
    console.log("Instance Initiated");
   }

   colorPreference:string = "red"
}

import { Component, OnInit } from '@angular/core';
import {UserPreferenceService} from '../user-preference.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor(private _UserPreferenceService:UserPreferenceService) { }

  ngOnInit() {
  }

  get color(){
    return this._UserPreferenceService.colorPreference;
  }

  set color(val){
     this._UserPreferenceService.colorPreference = val;
  }

}

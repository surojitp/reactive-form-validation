import { Component } from '@angular/core';
import {UserPreferenceService} from './user-preference.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`
  //   <h1>{{pageHeader}}</h1>
  //   <app-employee></app-employee>
  //   <span [innerHtml]= 'pageHeader'></span><br>
  //   <span bind-innerHtml= 'pageHeader' [ngStyle]="{color:'red'}"></span>
  //   <div>{{badHtml}}</div><br>
  //   <div [innerHtml]='badHtml'></div>
  //   <input type="text" id="inputId"  value="Tom">
  //   <br><br>
  //   Your Text: <input type="text" [(ngModel)]="userText">
  //   <br><br>
  //   <app-lifecycle-hook [simpleInput] = "userText"></app-lifecycle-hook>
  // `,
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {

  userText: string = "Hello"
  pageHeader = 'Employee Details';
  badHtml = 'Hello <script>alert("Hacked")</script> World'
}

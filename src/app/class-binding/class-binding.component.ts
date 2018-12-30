import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  //templateUrl: './class-binding.component.html',
  template:`
    <br><br>
    <button class="colorClass" [class]="classToApply">Click Me</button>
    <br><br>
    <button [class.boldClass]="applyBoldClass" >Click Me</button>

    <br><br>
    /// remove one class
    <button  class="colorClass italicClass boldClass" [class.boldClass]="!applyBoldClass" >Click Me</button>

    <br><br>
    /// remove multiple class
    <button  class="colorClass" [ngClass]="addClasses()" >Click Me</button>
    <h1>Style Binding</h1>

    <br><br>
    
    <button  style="color:blue"  >Click Me</button>

    <br><br>
    
    <button  style="color:blue" [style.font-weight]="isBold ? 'bold' : 'normal'" >Click Me</button>OR
    <button  style="color:blue" [style.fontWeight]="isBold ? 'bold' : 'normal'" >Click Me</button>
    <br><br>
    
    <button  style="color:blue" [style.fontSize.%]="fontSize" >Click Me</button>

    <br><br>
    
    <button  [ngStyle]="addStyles()" >Click Me</button>

  `
  ,
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  classToApply:string ="italicClass boldClass"

  applyBoldClass:boolean = true;

  applyItalicClass:boolean = true;

  isBold:boolean = true;

  fontSize = 100;

  addClasses(){

    return {
      boldClass: this.applyBoldClass,
      italicClass: this.applyItalicClass
    }
  }

  addStyles(){
    let style ={
      color: "red",
      "font-style": this.applyItalicClass ? 'italic' : 'normal',
      "font-weight": this.isBold? 'bold' : 'normal',
      "font-size.px": this.fontSize
    }

    return style;
  }

  constructor() { }

  ngOnInit() {
  }

}

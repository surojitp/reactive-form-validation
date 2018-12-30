import { Component, OnInit,Input,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook',
  //templateUrl: './lifecycle-hook.component.html',
  template:`
    You Entered: {{simpleInput}}
  `,
  styleUrls: ['./lifecycle-hook.component.css']
})
export class LifecycleHookComponent implements OnChanges {

  @Input() simpleInput: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {

    console.log(changes);
    
    for(let propertyName in changes){

      let change= changes[propertyName];

      let current = JSON.stringify(change.currentValue)

      let previous = JSON.stringify(change.previousValue)

      console.log(`${propertyName}: currentValue= ${current}, Previous Value= ${previous}`);
      

      console.log(propertyName)
    }
  }

}

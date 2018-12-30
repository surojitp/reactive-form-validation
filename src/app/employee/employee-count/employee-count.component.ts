import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {

  @Input() all:number = 10;
  @Input() male:number = 5;
  @Input() female:number = 5;

  selectedRadioButtonValue:string= "All"

  @Output() countRadioButtonSelectionChange= new EventEmitter<string>();

  onRadioButtonSelectionChange(){
    this.countRadioButtonSelectionChange.emit(this.selectedRadioButtonValue);
    console.log(this.selectedRadioButtonValue)
  }

  constructor() { }

  ngOnInit() {
  }

}

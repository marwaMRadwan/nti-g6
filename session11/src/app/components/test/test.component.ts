import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
inputType = "password"
buttonTxt ="show"
status=true
  constructor() { }

  ngOnInit(): void {
  }
  handelClick(){
    this.inputType == "text"? this.inputType="password":this.inputType="text"
    this.buttonTxt == "hide"? this.buttonTxt="show":this.buttonTxt="hide"
  }
  

}

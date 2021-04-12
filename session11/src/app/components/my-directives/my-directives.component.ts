import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-directives',
  templateUrl: './my-directives.component.html',
  styleUrls: ['./my-directives.component.css']
})
export class MyDirectivesComponent implements OnInit {
x=17
monNum:number|string = null
data = ['jhh']
// months = ['jan','feb','mar']
months = [
  {monthName:'jan', val:1},
  {monthName:'feb', val:2},
  {monthName:'mar', val:3},
  {monthName:'apr', val:4},
  {monthName:'may', val:5},
  {monthName:'jun', val:6},
  {monthName:'jul', val:7},
  {monthName:'aug', val:8},
  {monthName:'sep', val:9},
  {monthName:'oct', val:10},
  {monthName:'nov', val:11},
  {monthName:'dec', val:12}
]
  constructor() { }

  ngOnInit(): void {
  }

}

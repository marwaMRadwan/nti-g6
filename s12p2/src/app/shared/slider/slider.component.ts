import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
slides = [
  {img:"/assets/1.jpg"},
  {img:"/assets/2.jpg"},
  {img:"/assets/3.jpg"},
]
  constructor() { }

  ngOnInit(): void {
  }

}

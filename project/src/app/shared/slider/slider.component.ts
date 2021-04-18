import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
slides=[]
  constructor(private _global:GlobalService) { 
       
   }

  ngOnInit(): void {
    this.getSlides()
  }
  getSlides(){
    this._global.getSliders().subscribe(res=>{
      this.slides = res
    })
  }
}

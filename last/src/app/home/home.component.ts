import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoaded = false
  data=[]
  constructor(private _global:GlobalService) {
   }

  ngOnInit(): void {
    this._global.getComments().subscribe(res=>this.data=res,()=>{},()=>{this.isLoaded=true})
  }



}

import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private _global:GlobalService) { }

  ngOnInit(): void {
    this._global.me().subscribe(res=>console.log(res))
  } 

}

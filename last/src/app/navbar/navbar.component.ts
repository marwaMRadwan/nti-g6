import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(public _global:GlobalService){}
  login(){
    this._global.isLogin=true
  }
  logout(){
    this._global.isLogin=false
  }
  ngOnInit(): void {
  }

}

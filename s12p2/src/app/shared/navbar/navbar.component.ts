import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  myRoutes = [
    {link:"/", title:"home"},
    {link:"/contact", title:"contact"},
    {link:"/news", title:"news"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'session12';
  d:Date = new Date()
  arr = [1,2,3,4,5,6,7,8,9,10]

  num = 5.25151515155
}

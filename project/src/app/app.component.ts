import { Component } from '@angular/core';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  constructor(private _global:GlobalService){
    _global.getToken().subscribe(res=> {
      console.log(res)
      _global.token = res.token
    },()=>{},
    ()=>{
      _global.getSliders().subscribe(res=>console.log(res))
    })
  }
}

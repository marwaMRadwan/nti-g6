import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'last';
  myC = 0
  constructor(private store:Store<any>){
    this.store.subscribe(data=>{
      console.log(data);
      this.myC = data.MyR.c
    })
  }
  add(){
    this.store.dispatch({
      type:'add',
      payload:10
    })
  }
}

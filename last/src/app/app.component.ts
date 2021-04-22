import { HttpClient } from '@angular/common/http';
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
  constructor(private store:Store<any>, private _global:GlobalService, private http:HttpClient){
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
file:FileList
  handelUpload(event){
    console.log(event.target.files)
this.file = event.target.files
  }
  uploadFile(){
    const myData = new FormData()
    for(let i=0; i<this.file.length;i++){
      myData.append('myFile', this.file[i], this.file[i].name)
    }
    
    // this.file.forEach(element => {
    //   myData.append('myFile', element, element.name)      
    // });
    this.http.post('http://localhost:3000/upload/photo', myData).subscribe(res=>console.log(res))
  }
}

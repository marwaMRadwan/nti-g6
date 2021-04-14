import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  userData:any ={
    name:'',
    bday:"",
    email:"",
    password:"",
    role:"6072ae7578bf291a28aa306e",
    phone:"",
    area:"",
    image:""
  }
  constructor(private _global:GlobalService) { }

  ngOnInit(): void {
  }
handelAddUser(){
  console.log(this.userData)

  this._global.addRestUser(this.userData).subscribe(
  res=>console.log(res)
)
}
}

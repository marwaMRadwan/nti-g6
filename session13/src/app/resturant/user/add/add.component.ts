import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private _global:GlobalService, private _router:Router) { }
msg=""
resStatus:Boolean = false
  ngOnInit(): void {
  }
handelAddUser(register){
  console.log(this.userData)
if(register.valid){
  this._global.addRestUser(this.userData).subscribe(
    res=>{
      console.log(res)
      this.msg=''
      this.resStatus=false
    },
    (error)=>{
      console.log(error.error.data)
      this.msg = error.error.data;
      this.resStatus=true
    },
    ()=>{
      console.log('done')
      this._router.navigate(['shop'])
    }
  )
  
}
else{console.log('invalid data')}
}
}

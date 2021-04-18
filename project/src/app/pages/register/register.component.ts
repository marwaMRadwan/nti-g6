import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userId:string
  registerUser=new FormGroup({
    userName:new FormControl(),
    password:new FormControl(),
    fullName:new FormControl(),
    phoneNumber: new FormControl()
  })
  constructor(private _global:GlobalService) { }

  ngOnInit(): void {
  }

  registerData(){
    this._global.registerUser(this.registerUser.value).subscribe(res=>{
    },
    (err)=>{
      console.log(err)
      this.userId=err.error.text
      localStorage.setItem('userId', err.error.text)

    })
  }
}

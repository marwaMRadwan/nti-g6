import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })
  constructor(private _global:GlobalService) { }

  ngOnInit(): void {
  }

  handelLogin(){
    this._global.login(this.loginModel.value).subscribe(res=>{
      console.log(res)
      localStorage.setItem('token', `${res.token_type} ${res.access_token}`)
    })
  }
}

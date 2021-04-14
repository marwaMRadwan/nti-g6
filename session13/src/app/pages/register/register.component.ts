import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    fname:'',
    lname:'',
    email:'',
    password:'',
    address:{country:"", city:""}
  }
  constructor(public _global:GlobalService) {
    _global.navStatus=false
   }

  ngOnInit(): void {
  }
  handelRegister(){
    console.log(this.user)
    this._global.handelForm(this.user)
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  allGov = []
  allCities = []
  roles =[]
  myData = new FormGroup({
    governorate:new FormControl('',[Validators.required]),
    city:new FormControl(),
    name:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
    role:new FormControl(1),
    address:new FormControl(),
    phone:new FormControl(),
    name_ar:new FormControl(),
    address_ar:new FormControl(),
    price:new FormControl(),
    gender:new FormControl(),
    location:new FormControl()
  })
  constructor(private _global:GlobalService, private toastr: ToastrService, private router:Router) { 
    this.getGovData()
    this.getRolesData()
  }
  ngOnInit(): void {
  }
  get governorate(){return this.myData.get('governorate')}
  get city(){return this.myData.get('city')}

  getGovData(){ this._global.getGov().subscribe(res=>{ this.allGov= res.data}) }
  getRolesData(){ this._global.getRoles().subscribe(res=>{ this.roles= res.data}) }
  chnggov(){
    this.allCities= []
    this._global.getCities(this.governorate.value).subscribe(res=>{ this.allCities = res.data })
  }
  addMe(){
    this._global.register(this.myData.value).subscribe(
      res=>{
        console.log(res)
      }
      , (err)=>{console.log(err)}
      ,()=>{    
        this.toastr.success('Done');
        setTimeout(() => {
          this.router.navigateByUrl('login');
      }, 1500);  //5s
      }
    )
  }
}

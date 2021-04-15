import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  allGov = []
  allCities = []
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
  constructor(private _global:GlobalService) { 
    this.getGovData()
  }
  ngOnInit(): void {
  }
  get governorate(){return this.myData.get('governorate')}
  get city(){return this.myData.get('city')}

  getGovData(){ this._global.getGov().subscribe(res=>{ this.allGov= res.data}) }
  chnggov(){
    this.allCities= []
    this._global.getCities(this.governorate.value).subscribe(res=>{ this.allCities = res.data })
  }
  addMe(){
    console.log(this.myData.value)
  }
}

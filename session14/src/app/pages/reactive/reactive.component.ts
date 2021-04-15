import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  //reactive form model
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    email: new FormControl('', [Validators.email]),
    country: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(20)]),
    address: new FormGroup({
      city: new FormControl('', [Validators.required])
    })
  })
  isSubmitted = false
  constructor() { }

  ngOnInit(): void {
  }
  get name(){return this.myForm.get('name')}
  formSubmit(){
    this.isSubmitted=true
    if(this.myForm.valid){
    console.log(this.myForm.value)
    }
  }
}

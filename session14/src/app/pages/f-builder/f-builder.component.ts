import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-f-builder',
  templateUrl: './f-builder.component.html',
  styleUrls: ['./f-builder.component.css']
})
export class FBuilderComponent implements OnInit {
  myForm
  constructor(private fb: FormBuilder)  { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name:['',[Validators.required]],
      email:[''],
      address:this.fb.group({
        country:['']
      })
    })
  }
get name(){return this.myForm.get('name')}
get email(){return this.myForm.get('email')}
get country(){return this.myForm.get('address').get('country')}
handelForm(){}
}

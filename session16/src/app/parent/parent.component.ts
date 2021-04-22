import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import {ActivatedRoute} from "@angular/router"
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  data :string = ""
  x:any=0
  @ViewChild(ChildComponent, {static:true}) child:ChildComponent
  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.x = this._activatedRoute.snapshot.queryParamMap.get('x')||''
  }

  ngAfterViewChecked() {
    this.data = this.child.data
  }


}

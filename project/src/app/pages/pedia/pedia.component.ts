import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-pedia',
  templateUrl: './pedia.component.html',
  styleUrls: ['./pedia.component.css']
})
export class PediaComponent implements OnInit {
  p: number = 1;
  total = 0
  collection: any[] = [];  
  constructor(private _global:GlobalService) { }

  ngOnInit(): void {
    this._global.getPedia(0).subscribe(res=>{
      this.collection= res.result
      this.total = res.totalRecords
    })
  }
pageChanged(x){
  this.p=x
  this._global.getPedia(x-1).subscribe(res=>{
    this.collection = res.result
  })
  console.log(x)
}
}

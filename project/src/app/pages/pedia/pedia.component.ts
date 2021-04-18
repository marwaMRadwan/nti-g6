import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-pedia',
  templateUrl: './pedia.component.html',
  styleUrls: ['./pedia.component.css']
})
export class PediaComponent implements OnInit {
  p: number = 1;
  collection: any[] = [];  
  constructor(private _global:GlobalService) { }

  ngOnInit(): void {
    this._global.getPedia().subscribe(res=>{
      this.collection= res.result
    })
  }

}

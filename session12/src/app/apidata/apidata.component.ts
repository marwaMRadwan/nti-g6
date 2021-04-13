import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/services/data.service'
@Component({
  selector: 'app-apidata',
  templateUrl: './apidata.component.html',
  styleUrls: ['./apidata.component.css']
})
export class ApidataComponent implements OnInit {
  data :any=[]
  constructor(private _dataService:DataService) { }

  ngOnInit(): void {
    this._dataService.getData().subscribe(res=>{
      console.log(res)
      this.data = res
    })
  }

}

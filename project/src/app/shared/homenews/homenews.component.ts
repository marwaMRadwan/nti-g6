import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-homenews',
  templateUrl: './homenews.component.html',
  styleUrls: ['./homenews.component.css']
})
export class HomenewsComponent implements OnInit {
  news = []
  constructor(private _global:GlobalService) { }

  ngOnInit(): void {
    this._global.getNewsHomePage().subscribe(res=>{
      console.log(res)
      this.news=res.result
    })
  }

}

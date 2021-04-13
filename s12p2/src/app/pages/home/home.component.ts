import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {Post} from 'src/app/interfaces/post'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
news:Post[]=[]
  constructor(private _dataService:DataService) { }

  ngOnInit(): void {
    this.getNews()
  }

  getNews(){
  this._dataService.getPosts(4).subscribe(res=>{
  this.news = res
})
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-siglenews',
  templateUrl: './siglenews.component.html',
  styleUrls: ['./siglenews.component.css']
})
export class SiglenewsComponent implements OnInit {
id:any=null
data :Post
  constructor(private route:ActivatedRoute, private _dataService:DataService) { }

  ngOnInit(): void {
    // this.route.params.subscribe(x=>{
    //   this._dataService.getSinglePost(x.id).subscribe(res=>{
    //     this.data=res
    //   })
    // })
    this.id = this.route.snapshot.params.id
    this.id = this.route.snapshot.paramMap.get('id')
    this._dataService.getSinglePost(this.id).subscribe(res=>{
          this.data=res
        })
  }

}

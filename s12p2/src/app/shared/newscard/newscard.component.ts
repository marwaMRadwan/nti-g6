import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-newscard',
  templateUrl: './newscard.component.html',
  styleUrls: ['./newscard.component.css']
})
export class NewscardComponent implements OnInit {
@Input() singleCard:Post
  constructor() { }

  ngOnInit(): void {
  }

}

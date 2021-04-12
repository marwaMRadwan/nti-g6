import { Component, OnInit } from '@angular/core';
import {Posts} from 'src/app/interfaces/posts'
@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
status:boolean = false
val = 0
  x : number = 10
  c = 'red'
  d = "<p>hello</p>"
  data = [1,2,3,4,5,6,7]
  users=[
    {name:'a', age:10},
    {name:'b', age:15}
  ]
  myData1 = ''
  counter : number = 1
  // f : string|number = false
  posts:Posts[] = [
    {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    },
    {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
    },
    {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
    },
    {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque"
    }
    ];
  constructor() { }

  ngOnInit(): void {
  }
increaseCounter(){
  this.counter++
}
  getData(){
    return "hello";
  }
  getCName(){
    return 'ay7aga'
  }

  handelMyInput(event){
console.log(event.target.value)
this.val = event.target.value
  }
  handelInputRef(m){
    console.log(m)
    this.myData1 = m.value
  }
}


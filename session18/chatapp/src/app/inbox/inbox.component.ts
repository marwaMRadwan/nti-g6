import { Component, OnInit } from '@angular/core';
import {io} from 'socket.io-client';
const ENDPOINT = 'localhost:3000'
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  socket
  message
  constructor() { }

  ngOnInit(): void {
    this.setupSoketConnection()
  }
  setupSoketConnection(){
    this.socket=io(ENDPOINT)
  }
  sendMessage(){
this.socket.emit('msg', this.message)
console.log(this.message)
this.socket.on('message-broadcast', (data:string)=>{
  // console.log(data)
  if(data){
    let ele = document.createElement('li')
    ele.innerHTML=data
    document.querySelector('#messge-list').appendChild(ele)
  }
})

this.message=""
  }
}

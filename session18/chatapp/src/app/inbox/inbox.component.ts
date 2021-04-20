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
    this.socket.on('message-broadcast', (data:string)=>{
      console.log(data)
      if(data){
        let ele = document.createElement('li')
        ele.innerHTML=data
        document.querySelector('#messge-list').appendChild(ele)
      }
    })
  }
  sendMessage(){
this.socket.emit('msg', this.message)
let ele = document.createElement('li')
        ele.innerHTML=this.message
        document.querySelector('#messge-list').appendChild(ele)
this.message=""
  }
}

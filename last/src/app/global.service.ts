import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public isLogin:boolean = false
  constructor(private _http:HttpClient) { }
  //https://jsonplaceholder.typicode.com/comments
  getComments():Observable<any>{
    return this._http.get(`https://jsonplaceholder.typicode.com/comments`)
  }
}

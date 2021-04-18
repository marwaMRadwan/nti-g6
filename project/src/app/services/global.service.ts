import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  globalUrl ="http://198.12.225.205:8090/API/"
  public token = null
  constructor(private _http: HttpClient) { }
  //account/token
  getToken():Observable<any>{
    return this._http.post(`${this.globalUrl}account/token`, {"userName" : "admin@mail.com",
    "password" : "2#}8gU^m~y"})
  }
  getSliders():Observable<any>{
    return this._http.get(`${this.globalUrl}Slider/List`)
  }
}

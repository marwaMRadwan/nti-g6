import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  commonUrl ="http://medical.mind-techs.com/api/"
  constructor(private _http:HttpClient) { }
  getGov():Observable<any>{
    return this._http.get(`${this.commonUrl}getGovernorate/1`)
  }
  getCities(id:number):Observable<any>{
    return this._http.get(`${this.commonUrl}GetCity/${id}/1`)
  }
  getRoles():Observable<any>{
    return this._http.get(`${this.commonUrl}auth/loadRoles/1`)
  }
  register(data):Observable<any>{
    return this._http.post(`${this.commonUrl}auth/signUp`, data)
  }
  login(data):Observable<any>{
    return this._http.post(`${this.commonUrl}auth/login`,data)
  }
  me():Observable<any>{
    return this._http.post(`${this.commonUrl}auth/me`, {lang:1})
  }
}

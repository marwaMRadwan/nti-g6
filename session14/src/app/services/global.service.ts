import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private _http:HttpClient) { }
  getGov():Observable<any>{
    return this._http.get('http://medical.mind-techs.com/api/getGovernorate/1')
  }
  getCities(id:number):Observable<any>{
    return this._http.get(`http://medical.mind-techs.com/api/GetCity/${id}/1`)
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public navStatus: Boolean = false
  constructor(private _http:HttpClient) { }
  handelForm(data){
    console.log(`service`)
    console.table(data)
  }
  addRestUser(data:any){
    return this._http.post('http://localhost:3000/user/register',data)
  }
}

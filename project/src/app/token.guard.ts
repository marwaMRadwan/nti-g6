import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from './services/global.service';

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {
  constructor(private _global:GlobalService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      if(!this._global.token){
        this._global.getToken().subscribe(res=> {
          // console.log(res)
          this._global.token = res.token
          //localStorage.setItem('token', this._global.token)
        })    
      }
    return true;
  }
  
}

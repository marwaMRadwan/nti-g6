import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {GlobalService} from 'src/app/services/global.service'
@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  constructor(private _global:GlobalService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let token = localStorage.getItem('token')
    if(token){
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      })
    }
    return next.handle(request);
  }
}

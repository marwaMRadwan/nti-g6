import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public navStatus: Boolean = false
  constructor() { }
}

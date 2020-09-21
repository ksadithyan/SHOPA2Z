import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private c_list
  constructor() { }
  getData(o)
  {
    this.c_list=o
  }
  setData()
  {
    return this.c_list
  }
 
}

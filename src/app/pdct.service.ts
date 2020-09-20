import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class PdctService {

  constructor(private http:HttpClient) { }

  getData()
  {
    return this.http.get("http://localhost:4200/assets/product.json")
  }
}

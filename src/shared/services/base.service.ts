import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class baseservice {

  url="../../../database/data.json";
  
  constructor(private http:HttpClient) { }


  getpost(){
    return this.http.get(this.url);
  }


}

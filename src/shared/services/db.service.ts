import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class DbService {

  // private static staticClient: HttpClient
  // private static INSTANCE: DbService
  private username = localStorage.getItem('username')
  private url = `https://api.github.com/users`;
  static username: any;

  constructor(
    private httpClient: HttpClient
  ) { }

  getprofile(userid) {

    return this.httpClient.get(`${this.url}/${userid}`);

  }

  getAllUsers() {
    return this.httpClient.get(`${this.url}`);

  }




}

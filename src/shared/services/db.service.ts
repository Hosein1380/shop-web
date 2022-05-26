import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpXhrBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import Client from '../dto/Client';

@Injectable({
  providedIn: 'root'
})

export class DbService {

  // private static staticClient: HttpClient
  // private static INSTANCE: DbService

  private url = '../database/users.json';

  constructor(
    private httpClient: HttpClient,
  ) {
    // DbService.INSTANCE = this;
  }


  // public static getInstance() {
  //   if (!this.INSTANCE) {
  //     this.INSTANCE = new DbService(DbService.staticClient)
  //   }
  //   return this.INSTANCE;
  // }


  getUsers(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.url);
  }

}

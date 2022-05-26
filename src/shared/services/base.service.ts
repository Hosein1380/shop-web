import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import data  from '../database/data.json';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class baseservice {

  url='../database/data.json';
  find: any;

  item: any;
  results: any[] = [];

//  url = require('../../../database/data.json');

// url = JSON.parse('../../../database/data.json');
  
  constructor(
    private http:HttpClient,
    private baseservice:baseservice,
    private activateroute:ActivatedRoute
    ) { }


  getpost(){

    // this.activateroute.queryParams.subscribe(res=>{
    //   let param = res['cate'];
    //   data.filter(result => {
    //     if(param == result.cat){
    //       this.results.push(result);
    //     }
    //   });


    // });



  //   return data;
  // }
  // getpost(cat: string){
    // return this.http.get(`${this.url}/${cat}`);
    // return this.http.get(`${this.url}`);

  }
}

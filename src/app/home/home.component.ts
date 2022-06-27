import { Component, OnInit } from '@angular/core';
import data from '../../shared/database/data.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dd: any;
  buyid: any[] = []

  constructor() { }

  ngOnInit(): void {

    this.dd = data;

    let product = localStorage.getItem('product');
    if (product) {
      this.buyid.push(product);
    }

  }

  buy(dd) {
    this.buyid.push(
      dd.id
    )
    localStorage.setItem('product', this.buyid.toString());
    console.log(this.buyid);
    console.log(dd.id);

  }


}

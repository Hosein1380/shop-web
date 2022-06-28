import { Component, OnInit } from '@angular/core';
import data from '../../shared/database/data.json';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  basket: any = [];
  product: any;
  constructor(

  ) { }

  ngOnInit(): void {


    // get products & find by id 
    this.product = localStorage.getItem('product');
    this.product = this.product?.toString().split(',');

    this.product.forEach(id => {
      this.basket.push(data.find(pro => pro.id === Number(id)));
    });


    console.log(this.basket);

    this.sumproduct();

  }

  // remove btn

  remove(id) {
    let bas = this.basket.findIndex(item => item == id);
    this.basket.splice(bas, 1);
    let index = this.product.findIndex(res => res == id);
    this.product.splice(index, 1);
    localStorage.setItem('product', this.product);


    this.sumproduct();
  }
  // sum price product
  sumproduct() {
    let sum = this.basket.reduce((a, b) => a + b.price, 0);
    console.log(sum);
    return sum;

  }
  // product length
  length() {
    let aray = this.basket.length;
    return aray;
  }

  // buy btn

  buy() {
    localStorage.clear();
  }

}

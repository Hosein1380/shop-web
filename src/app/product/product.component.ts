import { Component, OnInit } from '@angular/core';
import { baseservice } from 'src/shared/services/base.service';
import data from '../../shared/database/data.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  item: any;
  results: any[] = [];


  constructor(
    // private baseservice:baseservice,
    private activateroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activateroute.queryParams.subscribe(res => {
      let param = res['cate'];
      data.filter(result => {
        if (param == result.cat) {
          this.results.push(result);
        }
      });

    })

    // 
    // 
    // 

  }

}
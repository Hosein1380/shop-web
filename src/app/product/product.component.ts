import { Component, OnInit } from '@angular/core';
import { baseservice } from 'src/shared/services/base.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {



  constructor(
    private baseservice:baseservice
    ) { }

  ngOnInit(): void {

    this.baseservice.getpost().subscribe(res => 
      {
        console.log(res);
      })
   
    
  }

}

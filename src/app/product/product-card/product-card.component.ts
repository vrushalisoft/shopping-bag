import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/model/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{

  constructor(private prodServe : ProductService){}
  productList  :Product[] = [];
  @Input() product: any;


  ngOnInit(): void {
    this.productList = this.prodServe.getProductList();
    this.prodServe.prodSub.subscribe({
      next : (updatedProductList :Product[] | any) => {
      this.productList = updatedProductList;
      }
    })
  }


}

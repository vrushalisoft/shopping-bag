import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/model/product.model';
import { ShoppingService } from 'src/app/shared/services/shopping.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{

  constructor( private route: ActivatedRoute, private shopService: ShoppingService){}
  @Input() product: any;
  productList  :Product[] = [];
  counter : number = 1;


  ngOnInit() {

  }

  plus(){
    this.counter +=1;
  }
minus(){
    if(this.counter >1){
      this.counter -=1;
    }
  }


  addToBag(product : Product){
    product.pQty = this.counter
      this.shopService.addToBag(product);
      window.alert('Your product has been added to the Shopping Bag!');
    }

}

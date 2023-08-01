import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/shared/model/product.model';
import { ShoppingService } from 'src/app/shared/services/shopping.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
  shoppingList  :Product[] = [];
  total : number = 0;
  constructor(private shopServe: ShoppingService){}

  ngOnInit(): void {
    this.shoppingList = this.shopServe.getProducts();
  }

  deleteProduct(product: any) {
    this.shoppingList = this.shoppingList.filter(({pName}) => pName !== product.pName)
  }

  priceTotal(){
   return this.shoppingList.reduce((acc, prod) => acc+= prod.pPrice * prod.pQty ,0)
  }
}

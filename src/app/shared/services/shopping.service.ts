
import { Product } from "../model/product.model";


export class ShoppingService {
  ShoppingBag: Product[] = [];

  addToBag(product: Product) {
    const productExistInBag = this.ShoppingBag
                    .find(({pName}) => pName === product.pName);
    if (!productExistInBag) {
      this.ShoppingBag.push({...product});
      return;
    }else{
      productExistInBag.pPrice =  productExistInBag.pPrice *  productExistInBag.pQty;
      productExistInBag.pQty += product.pQty;
    }
  }

  // bagQuantity(pQ : any){
  //   return this.ShoppingBag.reduce((acc, prod) => acc+= prod.pQty ,0)
  // }

  getProducts() {
    return this.ShoppingBag;
  }

  clearBag() {
    this.ShoppingBag = [];
    return this.ShoppingBag;
  }

}

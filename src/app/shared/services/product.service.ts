
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from "../model/product.model";
import { HttpClient,} from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService{

  private baseUrl = 'http://localhost:4200';

  constructor(private http : HttpClient){}

  private productDataList = [
    new Product('Monitor', 1, 6.90,'https://media.croma.com/image/upload/v1683209047/Croma%20Assets/Computers%20Peripherals/Monitor/Images/260610_5_i0hdbw.png'),
    new Product('Mouse', 1, 6.90, 'https://i.pcmag.com/imagery/roundups/05UuGuaC1DeBtIUmi0vstl3-15..v1674505590.jpg'),
    new Product('KeyBoard', 4, 9.00, 'https://m.media-amazon.com/images/I/612+TEDv7OL._AC_UF1000,1000_QL80_.jpg'),
    new Product('Speaker', 2, 8.20, 'https://cdn.thewirecutter.com/wp-content/media/2023/04/computerspeakers-2048px-creativepebblepro-hero.jpg')
  ];

  prodSub = new BehaviorSubject(this.productDataList.slice());

  getProductList(){
    return this.productDataList.slice();
  }

  addNewProductToList( newProd : Product){
    this.productDataList.push(newProd)
    this.prodSub.next(this.productDataList.slice())
  }

  public uploadImage(image: File){
    const formData = new FormData();
    formData.append('pQty', image);
    return formData
}
}

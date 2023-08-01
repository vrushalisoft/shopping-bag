import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/model/product.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm : any;
  url : any;

  size_limit :boolean =false;

  constructor( private productServe : ProductService, private http: HttpClient){}

  ngOnInit(): void {
      this.productForm = new FormGroup({
        pName : new FormControl('',Validators.required),
        pImg : new FormControl('', Validators.required),
        pPrice : new FormControl('',Validators.required),
        pQty : new FormControl(0),
      })
  }

  onImgChange(event: any) {
    const file = event.currentTarget.files[0];
    const maxSize = 100*1024;
    const reader = new FileReader();
    if (file.size <= maxSize) {
      reader.onload = (e : any) => {
        this.url= e.currentTarget.result;
        }
        reader.readAsDataURL(file);
     } else{
      alert("please select image size less than 100kb");
     }

  }


  onSubmit(){

    let prod = this.productForm.value;
    console.log(prod)
    let productObj = new Product(prod.pName, prod.pQty, prod.pPrice, this.url)
    this.productServe.addNewProductToList(productObj);
    this.productForm.reset();
  }
}

import { Component ,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/model/product.model';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm : any;
  imageURL: string = '';
  constructor( private productServe : ProductService){}

  ngOnInit(): void {
      this.productForm = new FormGroup({
        pName : new FormControl('',Validators.required),
        pImg : new FormControl('', Validators.required),
        pPrice : new FormControl('',Validators.required),
        pQty : new FormControl(0),
      })
  }


  onFileChange(event : any, field : any) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      if (!file.type.startsWith('image')) {
        this.productForm.get(field).setErrors({
          required: true
        });
      } else {
        this.productForm.patchValue({
          [field]: file
        });
      }
    }
  }

  onSubmit(){
    // const formData = new FormData();
    // formData.append('pImg', this.productForm.get('fileSource').value);
    // this.http.post('http://localhost:8001/upload.php', formData)
    //   .subscribe(res => {
    //     console.log(res);
    //     alert('Uploaded Successfully.');
    //   })
    const formData = new FormData();
    Object.entries(this.productForm.value).forEach(
      ([key, value]: any[]) => {
        formData.set(key, value);
      }
    )

    let prod = this.productForm.value;
    console.log(prod)
    let productObj = new Product(prod.pName, prod.pQty, prod.pPrice, prod.pImg)
    this.productServe.addNewProductToList(productObj);
    this.productForm.reset();
  }
}

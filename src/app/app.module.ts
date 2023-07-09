import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { ProductCardComponent } from './product/product-card/product-card.component';
import { ProductItemComponent } from './product/product-card/product-item/product-item.component';
import { ShoppingListComponent } from './product/Shopping-list/shopping-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductService } from './shared/services/product.service';
import { ShoppingService } from './shared/services/shopping.service';
import { UploadImageComponent } from './product/product-form/upload-image/upload-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductItemComponent,
    ProductCardComponent,
    ShoppingListComponent,
    ProductFormComponent,
    ProductComponent,
    UploadImageComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ ProductService, ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

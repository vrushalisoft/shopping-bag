import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ShoppingListComponent } from './product/Shopping-list/shopping-list.component';


const routes: Routes = [
  { path : '' , redirectTo : '/home' ,pathMatch : 'full'},
  { path : 'home', component : ProductComponent},
  { path: 'shopping-bag', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

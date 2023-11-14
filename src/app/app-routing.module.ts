import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { CartsAdminComponent } from './cart-admin/components/carts-admin/carts-admin.component';

const routes: Routes = [
  {path: "products" , component: AllProductsComponent},
  {path : "details/:id" , component: ProductsDetailsComponent},
  {path: "cart" , component: CartComponent},
  // {path: "cartAdmin" , component: CartsAdminComponent},
  {path: "**" , redirectTo:"products", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

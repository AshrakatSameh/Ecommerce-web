import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsAdminComponent } from './components/carts-admin/carts-admin.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CartsAdminComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CartAdminModule { }

import { Component, OnInit } from '@angular/core';
import { CartsAdminService } from '../../services/carts-admin.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-carts-admin',
  templateUrl: './carts-admin.component.html',
  styleUrls: ['./carts-admin.component.css']
})
export class CartsAdminComponent implements OnInit {

  ngOnInit():void{
    this.getCartProducts()
    this.form= this.build.group({
      start:[''],
      end:['']

    })
  }
  constructor(private service:CartsAdminService, private build:FormBuilder, private productid:ProductsService){}
  cartProduct :any[]=[]
  form!: FormGroup

  details:any
  getCartProducts(){
    this.service.getCartOrders().subscribe((res:any)=>{
      this.cartProduct = res
    })
  }

  applyFilter(){
    let date = this.form.value
    this.service.getCartOrders(date).subscribe((res:any)=>{
      this.cartProduct = res
    })
  }


  deleteCart(id:number){
    this.service.deleteCart(id).subscribe((res:any)=>{
      this.getCartProducts()
      alert("cart deleted success")
    })
  }

  viewCart(index:number){
    this.cartProduct=[]
    this.details = this.cartProduct[index]
    for(let x in this.details.cartProduct[index]){
      this.productid.getProductById(this.details.cartProduct[x].productid).subscribe(res=>
        {
          this.cartProduct.push({item: res, quantity: this.details.cartProduct[x].quantity})
        })
    }
    console.log(this.details)
  }
}

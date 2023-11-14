import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  constructor(private service:CartService){

  }
  ngOnInit():void{
    this.getCartProducts()
    
  }

  total: any = 0
  cartProduct :any[]=[]
  success:boolean = false


  getCartProducts(){
    if("cart" in localStorage){
      this.cartProduct= JSON.parse(localStorage.getItem("cart")!)
    }
    this.getCartTotal()
    //console.log(this.cartProduct)

  }

  getCartTotal(){
    this.total=0
    for(let x in this.cartProduct){
      this.total += this.cartProduct[x].item.price * this.cartProduct[x].quantity;
      console.log(this.total) 
    }
  }

  detectChange(){
    localStorage.setItem('cart', JSON.stringify(this.cartProduct))
  }


  deleteProduct(index:number) {
    this.cartProduct.splice(index , 1)
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartProduct))
  }

  clearCart(){
    this.cartProduct=[]
    this.getCartTotal()
    localStorage.setItem('cart',JSON.stringify(this.cartProduct))
  }
  // changeAmount(index: number){
  //   this.getCartTotal()
  // }


  addCart(){
    let products= this.cartProduct.map(item=>{
      return {productId:item.item.id, quantity: item.quantity}
    })
    let Model={
      userId:5,
      date:new Date(),
      products: products
    }
    // console.log(Model)

    this.service.createCartOrder(Model).subscribe((res:any)=> {
      this.success= true
    })
   
  }
}

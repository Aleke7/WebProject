import { Router } from '@angular/router';
import { CartService } from './../../services/cart/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartProducts: any[] = []
  cartEmpty:boolean = true
  totalPrice: number = 0

  name: string = ''
  phoneNumber: string = ''

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.getCartProducts()
    this.getTotalPrice()
  }

  getCartProducts() {
    this.cartProducts = this.cartService.cartProducts
    if(this.cartProducts.length > 0) {
      this.cartEmpty = false
    }
  }

  getTotalPrice() {
    for(let i = 0; i < this.cartProducts.length; i++) {
      this.totalPrice += this.cartProducts[i].price
    }
  }

  clearCart() {

    this.cartEmpty = true

  }

  checkoutButtonClick() {
    alert('Thanks for your order, we will contact with you shortly')
    this.router.navigate([''])
  }
}

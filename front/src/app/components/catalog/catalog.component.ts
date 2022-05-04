import { CartService } from './../../services/cart/cart.service';
import { ProductsService } from './../../services/products/products.service';
import { HttpClient } from '@angular/common/http';
import { CategoriesService } from './../../services/categories/categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  buttonStatus = 'AddToCart'

  selectedCategory: string = ''
  products: any[] = []

  constructor(
    private categorieService: CategoriesService, 
    private http: HttpClient,
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.selectedCategory = this.categorieService.selectedCategory
    this.getProducts()
  }

  getProducts() {
    this.productsService.getProducts().subscribe((res: any) => {
      console.log(res)
      this.products = res
    })
  }

  addToCart(product: any) {
    this.cartService.cartProducts.push(product)
    alert("Product added")
  }
  
}

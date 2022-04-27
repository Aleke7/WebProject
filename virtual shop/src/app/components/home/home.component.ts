import { ProductsService } from './../../services/products/products.service';
import { CategoriesService } from './../../services/categories/categories.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: string[] = []

  constructor(
    private categoryService: CategoriesService, 
    private productService: ProductsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((res: any) => {
      this.categories = res
      console.log(res)
    })
  }

  categoryButtonClick(category: string) {
    this.router.navigate(['catalog/', category])
    this.categoryService.selectedCategory = category
    this.productService.selectedCategory = category
  }

}

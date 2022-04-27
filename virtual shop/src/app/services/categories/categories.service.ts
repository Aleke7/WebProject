import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  selectedCategory: string = ''

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get('https://fakestoreapi.com/products/categories')
  }

}

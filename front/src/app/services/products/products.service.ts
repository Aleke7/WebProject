import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  selectedCategory: string = ''

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('http://127.0.0.1:8000/api/category/'+ this.selectedCategory + '/')
  }
}


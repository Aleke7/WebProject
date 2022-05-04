import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  selectedCategory: string = ''

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get('http://127.0.0.1:8000/api/category/')
  }

}

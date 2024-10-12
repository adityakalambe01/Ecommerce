import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../../Constant/Constants';
import {Categories} from '../../Models/class/Categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private constant: Constants = new Constants();
  constructor(private http:HttpClient, ) { }

  // Get All Categories
  getAllCategories() {
    return this.http.get(
      this.constant
        .API_URL
      +
      this.constant.CATEGORIES_METHODS.GET_ALL_CATEGORIES

    );
  }

  // Get Category by id
  getCategories(id:number) {
    return this.http.get(
      this.constant
        .API_URL
        .concat(
          this.constant.CATEGORIES_METHODS.GET_CATEGORY_BY_ID
        ).concat(String(id))
    );
  }

  // Add new Category
  addCategory(category:Categories){
    return this.http.post(
      this.constant.API_URL,
      category
    )
  }

  // Update existing category
  updateCategory(category:Categories){
    return this.http.put(
      this.constant.API_URL+category.id,
      category
    );
  }

  // Delete category by id
  deleteCategory(id:number){
    return this.http.delete(
      this.constant.API_URL+id
    );
  }

  // Get all products by category id
  getAllProductsByCategoryId(categoryId:number){
    return this.http.get(
      this.constant.ALL_PRODUCTS_BY_CATEGORY_ID(categoryId)
    )
  }
}

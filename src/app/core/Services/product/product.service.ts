import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../../Constant/Constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject(HttpClient);

  constructor() { }

  constant: Constants = new Constants();

  getAllProducts() {
    return this.http.get(this.constant.API_URL.concat(this.constant.PRODUCT_METHODS.GET_ALL_PRODUCTS));
  }

  getProductById(id:number) {
    return this.http.get(
      this.constant.API_URL.concat(this.constant.PRODUCT_METHODS.GET_PRODUCT_BY_ID).concat(String(id))
    );
  }


}

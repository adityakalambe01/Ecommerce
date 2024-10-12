import {Component, inject, OnInit} from '@angular/core';
import {ProductService} from '../../core/Services/product/product.service';
import {IProduct} from '../../core/Models/interface/IProduct';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {LoaderComponent} from '../loader/loader.component';
import { Router } from '@angular/router';
import { ViewProductComponent } from './view-product/view-product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, NgIf, LoaderComponent, ViewProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
    constructor(private productService : ProductService) {
    }
    router = inject(Router);

    allProducts: IProduct[] = [];
    isDataLoad: boolean = false;
    getAllProducts() {
      this.isDataLoad = true;
      this.productService.getAllProducts().subscribe(
        (data: any)=>{
          this.allProducts = data;
          this.isDataLoad = false;
        }
      );

    }

  ngOnInit(): void {
      this.getAllProducts();
      this.id = 0;

  }
  id:number = 0;

  viewProduct(id:number){
    this.id = id;
    localStorage.setItem('id',JSON.stringify(this.id.toString()));
    this.router.navigateByUrl('view-product');
  }

  protected readonly Math = Math;
}

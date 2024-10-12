import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../core/Services/product/product.service';
import {IProduct} from '../../core/Models/interface/IProduct';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {LoaderComponent} from '../loader/loader.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, NgIf, LoaderComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
    constructor(private productService : ProductService) {
    }

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
  }

  protected readonly Math = Math;
}

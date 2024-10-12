import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../core/Models/class/Product';
import { ProductService } from '../../../core/Services/product/product.service';
import { IProduct } from '../../../core/Models/interface/IProduct';

@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent implements OnInit {

  // @Input() currentProduct: number | undefined;
  storedId = localStorage.getItem('id');
  // id: number = ;
  totalProduct: number = 1;
  constructor(private productService: ProductService) {

  }
  ngOnInit(): void {
    const id:number = this.storedId !== null ? parseInt(JSON.parse(this.storedId)) : 0;
    this.getProductById(id);
  }

  product:Product | any;
  getProductById(id:number) {
    console.log(id);
    this.productService.getProductById(id).subscribe((data:any)=>{
      this.product = data;
    })

  }

  minus(){
    if(this.totalProduct>1)
      --this.totalProduct;
  }
  add(){
    ++this.totalProduct;
  }

}

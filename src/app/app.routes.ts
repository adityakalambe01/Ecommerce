import { Routes } from '@angular/router';
import {CategoriesComponent} from './Pages/categories/categories.component';
import {ProductsComponent} from './Pages/products/products.component';
import { ViewProductComponent } from './Pages/products/view-product/view-product.component';

export const routes: Routes = [
  {
    path: 'all-categories',
    component: CategoriesComponent
  },
  {
    path: 'all-products',
    component: ProductsComponent
  },
  {
    path: 'view-product',
    component: ViewProductComponent
  }
];

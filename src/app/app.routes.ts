import { Routes } from '@angular/router';
import {CategoriesComponent} from './Pages/categories/categories.component';
import {ProductsComponent} from './Pages/products/products.component';

export const routes: Routes = [
  {
    path: 'all-categories',
    component: CategoriesComponent
  },
  {
    path: 'all-products',
    component: ProductsComponent
  }
];

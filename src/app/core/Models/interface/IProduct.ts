import {ICategories} from './ICategories';

export interface IProduct {
  id:number;
  title:string;
  price:number;
  description:string;
  category: ICategories;
  images:string[];
}

import {ICategories} from './ICategories';

export class Product {
  id:number;
  title:string;
  price:number;
  description:string;
  category: ICategories | any;
  images:string[];
  constructor(){
    this.id = 0;
    this.title = "";
    this.price = 0;
    this.description = "";
    this.images = [];

  }

}

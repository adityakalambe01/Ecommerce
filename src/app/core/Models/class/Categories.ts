export class Categories {
  id:number;
  name: string;
  image: string;
  creationAt: Date;
  updatedAt?:Date;

  constructor(){
    this.id = 0;
    this.name = "";
    this.image = "";
    this.creationAt = new Date();
  }
}

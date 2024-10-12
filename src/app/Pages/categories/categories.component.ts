import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICategories} from '../../core/Models/interface/ICategories';
import {CategoryService} from '../../core/Services/category/category.service';
import {DatePipe, JsonPipe, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LoaderComponent} from '../loader/loader.component';



@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [JsonPipe, FormsModule, NgIf, DatePipe, LoaderComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
  http  = inject(HttpClient)
  categoryService = inject(CategoryService);
  constructor() {
  }
  categoryList:ICategories[] =[];

  isDataLoad: boolean = false;

  getAllCategories(){
    this.isDataLoad = true;
    this.categoryService.getAllCategories().subscribe(
      (data:any)=>{
        this.categoryList=data;
        this.isDataLoad = false;

      },error=>{
        alert(error.message);
      }
    );
    // this.isDataLoad = true;
    // this.http.get('https://api.escuelajs.co/api/v1/categories').subscribe(
    //   (res: any) => {
    //     this.categoryList = res;
    //     this.isDataLoad = false;
    //   }
    // )
  }

  ngOnInit(): void {
    this.getAllCategories();
  }
}

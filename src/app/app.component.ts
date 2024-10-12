import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CategoriesComponent} from './Pages/categories/categories.component';
import {NavbarComponent} from './Pages/navbar/navbar.component';
import {FooterComponent} from './Pages/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CategoriesComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ecommerce';
}

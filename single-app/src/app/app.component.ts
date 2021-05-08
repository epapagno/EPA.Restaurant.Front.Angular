import { Component } from '@angular/core';
import { Dish } from './models/dish';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dishArray: Dish[] = [
    { id: 1, name: 'Milanesa' },
    { id: 2, name: 'Empanada' },
    { id: 3, name: 'Pizza' }
  ];
}

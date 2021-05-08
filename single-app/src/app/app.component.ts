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
  selectedDish: Dish = new Dish();
  addOrEdit(){
    if(this.selectedDish.id === 0)
    {
      this.selectedDish.id = this.dishArray.length + 1;
      this.dishArray.push(this.selectedDish);    
    }
    this.selectedDish = new Dish();
  }
  openForEdit(dish: Dish){
    this.selectedDish = dish;
  }
  delete(id: number){
    if(confirm('Are you sure to delete this item?')){
      this.dishArray = this.dishArray.filter(d => d != this.selectedDish)
      this.selectedDish = new Dish();
    }
  }
}

import { Component } from '@angular/core';
import { Dish } from './models/dish';
import { DishService } from './services/dish.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dishService: DishService){
    this.dishService.getDishes().subscribe((resp: any) => {
      this.dishArray = resp.items;
    })
  }
  showCard: boolean = false;
  dishArray!: Dish[];
  selectedDish: Dish = new Dish();
  addOrEdit(){
      this.dishService.saveOrUpdateDish(this.selectedDish).subscribe((responseDish: any) => {
        if(responseDish.id > 0)
        {
          this.selectedDish = new Dish();
          this.showCard = false;
        }
        this.dishService.getDishes().subscribe((resp: any) => {
          this.dishArray = resp.items;
        });    
      });          
  }
  openForEdit(dish: Dish){
    this.dishService.getDish(dish.id).subscribe((resp: Dish) => { 
      this.selectedDish = resp;
    });
  }
  showEmptyCard(){
    this.selectedDish = new Dish();
    this.showCard = true;
  }  
  delete(id: number){
    if(confirm('Are you sure to delete this item?')){
      this.dishService.deleteDish(id).subscribe((resp: any) => {
        if(resp.isDeleted){
          this.dishService.getDishes().subscribe((respItems: any) => {
            this.dishArray = respItems.items;
          });     
          this.selectedDish = new Dish();
        }
      })      
    }
  }
  cancel(){
    this.selectedDish = new Dish();
    this.showCard = false;
  }
}

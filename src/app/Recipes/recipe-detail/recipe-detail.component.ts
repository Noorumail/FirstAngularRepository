import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor() { }
@Input() recipe:Recipe;
recipes:Recipe[] = [ 


  new Recipe('a test recipe','this is simple test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505.jpg'),
  new Recipe('a fish recipe','this is simple fish','https://www.petlandtexas.com/wp-content/uploads/2019/08/Petland_Texas_Aquarium.jpg')
];


  ngOnInit(): void {
  }

}

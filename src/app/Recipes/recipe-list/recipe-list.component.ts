import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  // recipes:Recipe[] = [
    //new Recipe('a test recipe','this is simple test description','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505.jpg'),
   // new Recipe('a fish recipe','this is simple fish description','https://www.petlandtexas.com/wp-content/uploads/2019/08/Petland_Texas_Aquarium.jpg')
  // ]

 // @Output() recipeWasSelected = new EventEmitter<Recipe>();

recipes:Recipe[];

  constructor( private recipeService:RecipeService) { }

  ngOnInit(){

    this.recipes = this.recipeService.getRecipes();
  }

 // onRecipeSelected(recipe:Recipe){
//    this.recipeWasSelected.emit(recipe);
  //}

}

import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";


export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();

   private recipes:Recipe[] = [
        new Recipe('a test recipe','this is simple test description','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505.jpg'),
        new Recipe('a fish recipe','this is simple fish description','https://www.petlandtexas.com/wp-content/uploads/2019/08/Petland_Texas_Aquarium.jpg')
      ];

      getRecipes(){
          return this.recipes.slice();
      }

}
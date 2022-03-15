import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    private ingredients: Ingredient[]= [
        new Ingredient('apples',5),
        new Ingredient( 'tomato', 10)
      ];


      getIngredients(){
          return this.ingredients.slice()
      }
    
}
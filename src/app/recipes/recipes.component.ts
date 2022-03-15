import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipes/recipe.model';
import { RecipeService } from '../Recipes/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {ipe

  selectedRecipe:Recipe;

  constructor( private recipeService:RecipeService) { }

 // selectedRecipe:Recipe;

  ngOnInit() {
    this.recipeService.recipeSelected
    .subscribe(
      (recipe:Recipe) => {
        this.selectedRecipe = recipe
      }
    );
  }

}

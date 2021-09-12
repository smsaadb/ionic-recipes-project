import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { RecipeInfo } from '../types/RecipeInfo';

@Component({
  selector: 'app-favorite-recipes',
  templateUrl: './favorite-recipes.page.html',
  styleUrls: ['./favorite-recipes.page.scss'],
})
export class FavoriteRecipesPage implements OnInit {
  favoriteRecipes: RecipeInfo[];

  constructor(public storageService: StorageService, public router: Router) {
    this.favoriteRecipes = storageService.getAllFavRecipes();
  }

  public remove(recipeId: string) {
    this.storageService
      .removeFavRecipe(recipeId)
      .then(() => {
        console.log('Recipe removed from favorites.');
        this.favoriteRecipes = this.storageService.getAllFavRecipes();
      })
      .catch((err) => {
        console.log('Error while removing recipe:');
        console.log(err);
      });
  }

  public removeAllFavorites() {
    this.storageService.clear();
    this.favoriteRecipes = this.storageService.getAllFavRecipes();
  }

  public navigateTo(recipeId: string) {
    this.router.navigateByUrl(`/manager/searchrecipes/${recipeId}`);
  }

  ngOnInit() {}
}

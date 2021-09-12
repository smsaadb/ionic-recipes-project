import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeDetail } from '../types/RecipeDetail';
import { Recipe, Recipes } from '../types/Recipes';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getRecipes(searchTerm: string): Observable<Recipes> {
    return this.httpClient.get<Recipes>(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm.replace(
        / /g,
        '%20'
      )}&app_id=cf453bdb&app_key=d7196a0108af73141ad9080491a63b08&imageSize=SMALL&random=true`
    );
  }

  getRecipe(recipeId: string): Observable<RecipeDetail> {
    return this.httpClient
      .get<RecipeDetail>(`https://api.edamam.com/api/recipes/v2/${recipeId}?type=public&app_id=cf453bdb&app_key=d7196a0108af73141ad9080491a63b08
`);
  }
}

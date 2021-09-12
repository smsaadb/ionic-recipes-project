import { flatten } from '@angular/compiler';
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
// import { Student } from './home/home.page';

import { RecipeInfo } from '../types/RecipeInfo';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;

  public favoriteRecipes: RecipeInfo[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }
  public async clear() {
    await this._storage?.clear();
  }

  public get(key: string) {
    return this.storage.get(key);
  }

  public async addFavRecipe(key: string, value: RecipeInfo) {
    try {
      let recipeInfo = await this.storage.get(key);
      if (!recipeInfo) {
        let successObject = await this.storage.set(key, value);
        if (successObject) {
          return true;
        }
        return false;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  public async removeFavRecipe(key: string) {
    await this.storage.remove(key);
  }

  public getAllFavRecipes() {
    this.favoriteRecipes = [];

    this.storage.keys().then((keys) => {
      for (let key of keys) {
        this.storage.get(key).then((data) => {
          this.favoriteRecipes.push(data);
        });
      }
    });

    return this.favoriteRecipes;
  }

  printRecipesToConsole() {
    console.log('*** Recipes ***');
    let recipes: RecipeInfo[] = [];
    this.storage.keys().then((keys) => {
      for (let key of keys) {
        this.storage.get(key).then((data) => {
          recipes.push(data);
        });
      }
    });
    console.log(recipes);
  }
}

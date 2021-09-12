import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { StorageService } from '../services/storage.service';
import { RecipeDetail } from '../types/RecipeDetail';
import { RecipeInfo } from '../types/RecipeInfo';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  public recipeDetail: RecipeDetail = undefined;
  public recipeId: string = undefined;
  public recipeInfo: RecipeInfo = undefined;

  constructor(
    apiService: ApiService,
    activatedRoute: ActivatedRoute,
    public storageService: StorageService,
    public alertController: AlertController
  ) {
    this.recipeId = activatedRoute.snapshot.params['recipeId'];

    apiService.getRecipe(this.recipeId).subscribe(
      (data) => {
        this.recipeDetail = data;
      },
      (err) => {
        console.log('There was an error.');
        console.log(err);
      }
    );
  }

  private async addToFavAlert() {
    const alert = await this.alertController.create({
      header: 'Added to Favorites',
      message: 'The recipe has been added to your favorites.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async addToFavorite() {
    if (this.recipeId && this.recipeDetail) {
      this.recipeInfo = {
        id: this.recipeId,
        title: this.recipeDetail.recipe.label,
      };

      this.storageService
        .addFavRecipe(this.recipeId, this.recipeInfo)
        .then((added) => {
          if (added) {
            this.addToFavAlert();
          }
        });
    }
  }

  ngOnInit() {}
}

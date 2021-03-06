import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchRecipesPageRoutingModule } from './search-recipes-routing.module';

import { SearchRecipesPage } from './search-recipes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchRecipesPageRoutingModule
  ],
  declarations: [SearchRecipesPage]
})
export class SearchRecipesPageModule {}

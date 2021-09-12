import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchRecipesPage } from './search-recipes.page';

const routes: Routes = [
  {
    path: '',
    component: SearchRecipesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRecipesPageRoutingModule {}

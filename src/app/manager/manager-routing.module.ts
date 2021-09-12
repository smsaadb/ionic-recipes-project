import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerPage } from './manager.page';

const routes: Routes = [
  {
    path: 'manager',
    children: [
      {
        path: '',
        redirectTo: '/manager/menu',
        pathMatch: 'full',
      },
      {
        path: 'menu',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'searchrecipes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../search-recipes/search-recipes.module').then(
                (m) => m.SearchRecipesPageModule
              ),
          },
          {
            path: ':recipeId',
            loadChildren: () =>
              import('../recipe-details/recipe-details.module').then(
                (m) => m.RecipeDetailsPageModule
              ),
          },
        ],
      },
      {
        path: 'favoriterecipes',
        loadChildren: () =>
          import('../favorite-recipes/favorite-recipes.module').then(
            (m) => m.FavoriteRecipesPageModule
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/manager/menu',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerPageRoutingModule {}

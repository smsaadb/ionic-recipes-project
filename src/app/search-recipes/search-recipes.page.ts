import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Recipes } from '../types/Recipes';

@Component({
  selector: 'app-search-recipes',
  templateUrl: './search-recipes.page.html',
  styleUrls: ['./search-recipes.page.scss'],
})
export class SearchRecipesPage implements OnInit {
  public searchTerm: string = '';
  public searchedRecipes: Recipes = undefined;
  public showSkeletons = false;
  public listTitle: string = '';

  constructor(
    public apiService: ApiService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {}

  searchClicked() {
    this.showSkeletons = true;
    if (this.searchTerm != '') {
      this.listTitle = this.searchTerm;
      this.listTitle =
        this.listTitle.charAt(0).toUpperCase() + this.listTitle.slice(1);
      this.listTitle = this.listTitle + ' recipes';
      this.apiService.getRecipes(this.searchTerm).subscribe((data) => {
        this.searchedRecipes = data;
        this.showSkeletons = false;
      });
    }
  }

  recipeClicked(recipeUri: string) {
    let indexOfPoundSign = recipeUri.indexOf('#');
    let recipeId = recipeUri.slice(indexOfPoundSign + 1);

    this.router.navigate([recipeId], { relativeTo: this.activatedRoute });
  }

  ngOnInit() {}
}

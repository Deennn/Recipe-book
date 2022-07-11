import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'This is a description',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frecipes-for-all.com%2Fwp-content%2Fuploads%2F2020%2F05%2Fdelish-antipasto-potato-salad-still001-1530191842-e1588452642459.jpg&f=1&nofb=1'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}

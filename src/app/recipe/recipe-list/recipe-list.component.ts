import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
    recipes:Recipe[] = [

    new Recipe("Pizza","Delicious Pizza","https://cdn.com.do/wp-content/uploads/2017/07/12dc1a9d-pizza.jpg")

]
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredientes:Ingredient[] = [

    new Ingredient("rebanadas de queso Mozarrella",2),
    new Ingredient("Tomates frescos",5)

  ];

  constructor() { }

  ngOnInit(): void {
  }

}

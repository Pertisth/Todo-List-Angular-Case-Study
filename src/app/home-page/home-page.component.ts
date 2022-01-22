import { Component, OnInit } from '@angular/core';
import { Items } from '../Items/items';
import { Users } from '../Users/users';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  isGeneralActive: boolean = true;
  title: string = 'General List';

  // general itemList

  emptyItem : Items = new Items("Add Title","Low","Add Description");
  itemsList : Items[] = [];
  itemsListTemp: Items[] = [this.emptyItem];

  // shopping itemList
  shoppingList : Items[] = [];
  shoppingListTemp : Items[]= [this.emptyItem];


  onShoppingClick() {
    this.title = 'Shopping List';
    this.isGeneralActive = false;
  }
  onHomeClick() {
    this.title = 'General List';
    this.isGeneralActive = true;
  }
  constructor() {
    let userObj = JSON.parse(localStorage.getItem("currUser") as string);
    if(userObj !== null)
    {
      // let n : number = userObj.generalTodoList.length;
      this.itemsList = userObj.generalTodoList;
      this.shoppingList = userObj.shoppingList;

      // if(this.itemsList.length === 0)
      // {
      //   this.itemsList = this.itemsListTemp;
      // }
      // if(this.shoppingList.length === 0)
      // {
      //   this.shoppingList = this.shoppingListTemp;
      // }

    }
  }

  ngOnInit(): void {}
}

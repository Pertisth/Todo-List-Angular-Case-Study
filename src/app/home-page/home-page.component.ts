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
  // itemsListTemp: Items[] = [this.emptyItem];

  // shopping itemList
  shoppingList : Items[] = [];
  // shoppingListTemp : Items[]= [this.emptyItem];

  

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
      this.itemsList = this.itemsList.sort((a,b)=>{
        if(a.priority === "Low")
        {
          return 1;
        }
        else if(a.priority === "Medium"){
          if(b.priority === "Low")
          {
            return -1;
          }
          else{
            return 1;
          }
        }
        else
        {
          return -1;
        }
      });
      this.shoppingList = userObj.shoppingTodoList;
      this.shoppingList = this.shoppingList.sort((a,b)=>{
        if(a.priority === "Low")
        {
          return 1;
        }
        else if(a.priority === "Medium"){
          if(b.priority === "Low")
          {
            return -1;
          }
          else{
            return 1;
          }
        }
        else
        {
          return -1;
        }
      });
      console.log(this.itemsList);
    }
  }

  onDeleteShop(x:Items){
    let n : number = this.shoppingList.length;
    for(let i=0;i<n;i++)
    {
      if(x.title === this.shoppingList[i].title)
      {
        this.shoppingList.splice(i,1);
        break;
      }
    }
    let userObj = JSON.parse(localStorage.getItem("currUser") as string);
    userObj.shoppingTodoList = this.shoppingList;
    localStorage.setItem(userObj.name,JSON.stringify(userObj));
    localStorage.setItem("currUser",JSON.stringify(userObj));
  }

  onDeleteGen(x:Items){
    let n : number = this.itemsList.length;
    for(let i=0;i<n;i++)
    {
      if(x.title === this.itemsList[i].title)
      {
        this.itemsList.splice(i,1);
        break;
      }
    }
    let userObj = JSON.parse(localStorage.getItem("currUser") as string);
    userObj.generalTodoList = this.itemsList;
    localStorage.setItem(userObj.name,JSON.stringify(userObj));
    localStorage.setItem("currUser",JSON.stringify(userObj));
  }

  markAsDoneGen(x:Items){
    
  }

  ngOnInit(): void {}
}

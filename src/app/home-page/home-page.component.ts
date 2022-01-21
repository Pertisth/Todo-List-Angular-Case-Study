import { Component, OnInit } from '@angular/core';
import { Items } from '../Items/items';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  isGeneralActive : boolean = true;
  title : string = "General List";
  
  itemObj1 : Items = new Items("Pertisth","High","Hello Every One"); 
  itemObj2 : Items = new Items("Suprith","Medium","Hello Suprith");
  itemObj3 : Items = new Items("Suprith","Medium","Hello Suprith");
  itemObj4 : Items = new Items("Suprith","Medium","Hello Suprith");
  itemObj5 : Items = new Items("Suprith","Medium","Hello Suprith");
  itemObj6 : Items = new Items("Suprith","Medium","Hello Suprith");
  itemsList : Items[] = [this.itemObj1,this.itemObj2,this.itemObj3,this.itemObj4,this.itemObj5,this.itemObj6];

  // shopping itemList
   shopObj1 : Items = new Items("Pertisth","High","Hello Every One");
   shopObj2 : Items = new Items("Pertisth","High","Hello Every One");
   shopObj3 : Items = new Items("Pertisth","High","Hello Every One");
   shopObj4 : Items = new Items("Pertisth","High","Hello Every One");
   shopObj5 : Items = new Items("Pertisth","High","Hello Every One");
   shoppingList : Items[] = [this.shopObj1,this.shopObj2,this.shopObj3,this.shopObj4,this.shopObj5];

   onShoppingClick(){
     this.title = "Shopping List";
     this.isGeneralActive = false;
   }
   onHomeClick(){
     this.title = "General List";
     this.isGeneralActive = true;
   }
  constructor() { }

  ngOnInit(): void {
  }

}

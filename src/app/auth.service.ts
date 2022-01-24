import { Injectable } from '@angular/core';
import { Items } from './Items/items';
import { Users } from './Users/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  currUser : Users[] = [];

  item : Items[] = []; 

  userObj = new Users();
  
  setData(){
    const userData = JSON.stringify(this.userObj);
    localStorage.setItem(this.userObj.name,userData);

  }
  getData(username:string){
    return localStorage.getItem(username);
  }

  getCurrUser(){
    return JSON.parse(localStorage.getItem("currUser") as string);
  }

  setCurrUser(currUser : string){
    localStorage.setItem("currUser",currUser);
  }

  constructor() { 

  }
}

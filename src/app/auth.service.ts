import { Injectable } from '@angular/core';
import { Users } from './Users/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username : string = "";
  email : string = "";
  password : string = "";

  currUser : Users = new Users(this.username,this.email,this.password);

  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Items } from '../Items/items';
import { Users } from '../Users/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username : new FormControl(),
    password : new FormControl()
  });

  onSubmit(){
    let username : string = this.loginForm.value.username;
    let password :  string = this.loginForm.value.password;

    if(this.isValidUser(username,password) === true)
    {
      console.log("Correct");
      this.router.navigate(["/home"]);
    }
    else{
      console.log("Bad Credentials");
    }
  }

  isValidUser(uname : string,pword : string){

    let userObj = JSON.parse(localStorage.getItem(uname) as string);
    if(userObj !== null)
    {
      if(userObj.name == uname && userObj.password == pword)
      {
        console.log(userObj.generalTodoList);
        localStorage.setItem("currUser",JSON.stringify(userObj));
        return true;
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }
  constructor(private auth : AuthService,private router : Router) { }

  ngOnInit(): void {
  }

}

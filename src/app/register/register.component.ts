import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FormControl,FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Users } from '../Users/users';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // faEnvelope = faEnvelope;
  registerForm = new FormGroup({
    username : new FormControl(),
    email : new FormControl(),
    password : new FormControl()
  });

  onSubmit(){

    this.auth.username = this.registerForm.value.username;
    this.auth.email = this.registerForm.value.email;
    this.auth.password = this.registerForm.value.password;
    
    
  }

  constructor(private auth : AuthService ) { }

  ngOnInit(): void {
  }

}

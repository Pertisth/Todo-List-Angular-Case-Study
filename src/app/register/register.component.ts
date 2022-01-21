import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FormControl,FormGroup } from '@angular/forms';

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
    console.log(this.registerForm.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

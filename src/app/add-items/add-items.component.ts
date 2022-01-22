import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  addForm = new FormGroup({
    title : new FormControl(),
    desc : new FormControl(),
    category : new FormControl(),
    priority : new FormControl()
  });

  constructor(private router:Router) { }
  onSubmit(){
    console.log(
      this.addForm.value.title,
      this.addForm.value.desc,
      this.addForm.value.category,
      this.addForm.value.priority
    );

    let currUser = JSON.parse(localStorage.getItem("currUser") as string);
    let currUserName =  currUser.name;
    
    let title : string = this.addForm.value.title;
    let desc : string = this.addForm.value.desc;
    let category : string = this.addForm.value.category;
    let prior : string = this.addForm.value.priority;
    let priority : string = "";
    if(prior === "1")
    {
      priority = "Low";
    }
    else if(prior === "2")
    {
      priority = "Medium";
    }
    else if(prior === "3")
    {
      priority = "High";
    }

    if(category === "1"){
      currUser.generalTodoList.push({title,desc,priority});
      let user = JSON.stringify(currUser);
      localStorage.setItem(currUserName,user);
      localStorage.setItem("currUser",user);
    }
    else{
      currUser.shoppingTodoList.push({title,priority,desc});
      let user = JSON.stringify(currUser);
      localStorage.setItem(currUserName,user);
      localStorage.setItem("currUser",user);
    }
    this.router.navigate(["/home"]);
  }
  ngOnInit(): void {
  }

}

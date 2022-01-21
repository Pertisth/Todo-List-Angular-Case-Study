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
    console.log(this.addForm.value.title,this.addForm.value.desc,this.addForm.value.category,this.addForm.value.priority);
    this.router.navigate(["/home"]);
  }
  ngOnInit(): void {
  }

}

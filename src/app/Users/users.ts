import {Items } from "../Items/items";

export class Users {

    public name : string;
    public email : string;
    public password : string;

    generalTodoList : Items[] = [];
    shoppingTodoList : Items[] = [];

    public constructor(name : string,email:string,password:string){
        this.name = name
        this.email = email;
        this.password = password;
    }
    

}

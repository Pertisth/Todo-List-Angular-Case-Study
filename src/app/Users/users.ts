import {Items } from "../Items/items";

export class Users {

    public name : string;
    public email : string;
    public password : string;

    generalTodoList : Items[] = [];
    shoppingTodoList : Items[] = [];

    public constructor(){
        this.name = "";
        this.email = "";
        this.password = "";
    }
    

}

import { toDos } from "./todos.js";


export class Projects{
    constructor(name, color){
        this.name = name;
        this.color = color;
        this.toDoList = [];
    }

    addToDo(title, description, dueDate, priority){
        const newToDo = new toDos(title,description, dueDate, priority);
        this.toDoList.push(newToDo);
    }

    getToDos(){
        return this.toDoList;
    }


}


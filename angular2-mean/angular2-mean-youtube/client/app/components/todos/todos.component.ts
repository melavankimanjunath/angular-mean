import {Component} from "@angular/core";
import {TodoService} from "../../services/todos.service";
import {Todos} from "../../../Todos";

@Component({
    moduleId: module.id,
    selector:'todos',
    templateUrl:"todos.component.html",
    providers:[TodoService]
})

export class TodosComponent{
    todos: Todos[];
    title: string;
    constructor(private _todoService: TodoService){
        this._todoService.getTodos()
            .subscribe(todos => {
                this.todos = todos;
            })
    }

    addTodo(event) {
        event.preventDefault();
        var newTodo = {
            title:this.title,
            isDone:false
        }
        this._todoService.addTodo(newTodo)
            .subscribe(todo => {
                this.todos.push(todo);
                this.title=''
            });
    }

    todoDelete(id){
        var todos = this.todos;
        
        this._todoService.deleteTodo(id)
            .subscribe(data => {
               if(data.n==1){
                   for(var i=1;i < todos.length;i++){
                    //    if(todos[i]._id==id){
                    //        todos.splice(i,1);
                    //    }
                   }
               }
            });
    }
}
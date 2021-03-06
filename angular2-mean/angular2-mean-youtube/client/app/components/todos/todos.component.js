"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var todos_service_1 = require("../../services/todos.service");
var TodosComponent = (function () {
    function TodosComponent(_todoService) {
        var _this = this;
        this._todoService = _todoService;
        this._todoService.getTodos()
            .subscribe(function (todos) {
            _this.todos = todos;
            //console.log(this.todos);
        });
    }
    TodosComponent.prototype.addTodo = function (event) {
        var _this = this;
        event.preventDefault();
        var newTodo = {
            title: this.title,
            isDone: false
        };
        this._todoService.addTodo(newTodo)
            .subscribe(function (todo) {
            _this.todos.push(todo);
            _this.title = '';
        });
    };
    TodosComponent.prototype.todoDelete = function (id) {
        var todos = this.todos;
        var customId = '_id';
        this._todoService.deleteTodo(id)
            .subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 1; i < todos.length; i++) {
                    if (todos[i]._id == id) {
                        todos.splice(i, 1);
                    }
                }
            }
        });
    };
    TodosComponent.prototype.updateStatus = function (todo) {
        event.preventDefault();
        var _todo = {
            _id: todo._id,
            title: todo.title,
            isDone: !todo.isDone
        };
        this._todoService.udpateStatus(_todo)
            .subscribe(todo);
    };
    return TodosComponent;
}());
TodosComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'todos',
        templateUrl: "todos.component.html",
        providers: [todos_service_1.TodoService]
    }),
    __metadata("design:paramtypes", [todos_service_1.TodoService])
], TodosComponent);
exports.TodosComponent = TodosComponent;
//# sourceMappingURL=todos.component.js.map
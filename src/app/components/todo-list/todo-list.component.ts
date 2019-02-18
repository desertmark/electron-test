import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit {

  public todoList = [];
  public todoService: TodoService;
  constructor(todoService: TodoService) { 
    this.todoService = todoService;
    console.log('TODOSERVICE', this.todoService);
  }

  ngOnInit() {
    debugger;
    this.todoList = this.todoService.getTasks();
  }

}

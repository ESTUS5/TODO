import { Component , Output, EventEmitter} from '@angular/core';
import {Todo} from '../Todo'
@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})

export class TodoListHeaderComponent {

  constructor() { }

    @Output()
    add: EventEmitter<Todo> = new EventEmitter();

  newTodo: Todo = new Todo();

  addTodo() {
    this.add.emit(this.newTodo);
    console.log(this.newTodo);
    this.newTodo = new Todo();
  }

}

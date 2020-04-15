import { Injectable } from '@angular/core';
import { Todo } from './Todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class TodoDataService {

    constructor(
        private api: ApiService
    ) {
    }

    // Simulate POST /todos : Observable<Todo>
    addTodo(todo: Todo) {
        return this.api.createTodo(todo);
    }

    // Simulate DELETE /todos/:id   : Observable<Todo>
    deleteTodoById(todoId: number): Observable<Todo> {
        return this.api.deleteTodoById(todoId);
    }

    // Simulate PUT /todos/:id    : Observable<Todo>
    updateTodo(todo: Todo) {
        return this.api.updateTodo(todo);
    }

    // Simulate GET /todos      : Observable<Todo>
    getAllTodos() {
        return this.api.getAllTodos();
    }

    // Simulate GET /todos/:id      : Observable<Todo>
    getTodoById(todoId: number) {
        return this.api.getTodoById(todoId);
    }

    // Toggle complete
    toggleTodoComplete(todo: Todo) {
        todo.complete = !todo.complete;
        return this.api.updateTodo(todo);
    }
}

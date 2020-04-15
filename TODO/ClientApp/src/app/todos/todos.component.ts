import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';
import { TodoDataService } from '../todo-data.service';
import { ActivatedRoute } from '@angular/router';
import { map, finalize } from 'rxjs/operators';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css'],
    providers: [TodoDataService]

})


export class TodosComponent implements OnInit {

    constructor(
        private todoDataService: TodoDataService,
        private route: ActivatedRoute
    ) {
    }

    todos: Todo[] = [];

    public ngOnInit() {
        //In case of using api
        /*this.todoDataService
            .getAllTodos()
            .subscribe(
                (todos) => {
                    this.todos = todos;
                    console.log(this.todos)
                }
            );*/
        this.route.data
            .pipe(
                map(data => data['todos'])
            )
            .subscribe(
                (data:Todo[]) => {
                    this.todos = data; // or I could just use [0]
                }
        );
    }

    onAddTodo(todo: Todo) {
        this.todoDataService
            .addTodo(todo)
            .subscribe(
                (newTodo) => {
                    this.todos = this.todos.concat(newTodo);
                }
            );
    }
    onToggleTodoComplete(todo: Todo) {
        this.todoDataService
            .toggleTodoComplete(todo)
            .subscribe(
                (updatedTodo) => {
                    todo = updatedTodo;
                }
            );
    }

    onRemoveTodo(todo: Todo) {
        this.todoDataService
            .deleteTodoById(todo.id)
            .subscribe(
                (_) => {
                    this.todos = this.todos.filter((t) => t.id !== todo.id);
                }
            );
    }

}

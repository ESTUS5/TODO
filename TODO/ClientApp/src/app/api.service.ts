import { Injectable } from '@angular/core';
//import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Todo } from './Todo';
import { Observable, throwError } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { User } from './User';
import { debug } from 'util';

const API_URL = 'https://localhost:44386';//environment.apiUrl;


export class ApiService {

    constructor(
        private http: HttpClient
    ) { }

    private handleError(error: Response) {
        console.error('ApiService::handleError', error);
        return throwError(error);
    }

    // API: GET /todos  deleted due to error": Observable<Todo>"
    public getAllTodos() {
        return this.http
            .get<Todo[]>(API_URL + "/api/TodoItems/GetAllTodoItems")
            .pipe(
                map((response) => {
                    return response;
                }),
                catchError(this.handleError)
            );
    }

    // API: POST /todos
    public createTodo(todo: Todo) {
        return this.http
            .post<Todo>(API_URL + '/api/TodoItems/PostTodoItem/', todo)
            .pipe(
              map(response => {
               //     console.log('POSTER', response);
                    return response;
              }),
              catchError(this.handleError)
            );
    }

    // API: GET /todos/:id
    public getTodoById(todoId: number) {
        return this.http
            .get<Todo>(API_URL + '/api/TodoItems/GetTodoItem/' + todoId)
            .pipe(
                map((response: Todo) => {
                //    console.log("GET", response);
                return new Todo(response);
                }),
                catchError(this.handleError)
            );
    }

    // API: PUT /todos/:id
    public updateTodo(todo: Todo) {
        return this.http
            .put<Todo>(API_URL + '/api/TodoItems/PutTodoItem/' + todo.id, todo)
            .pipe(
                map((response: Todo) => {
                    //console.log('PUT', response);
                return response;
                }),
                catchError(this.handleError)
            );
    }

    // API: DELETE /todos/:id
    public deleteTodoById(todoId: number): Observable<null> {
        return this.http
            .delete<Todo>(API_URL + '/api/TodoItems/DeleteTodoItem/' + todoId)
            .pipe(
                map((response: Todo) => null
                   // , console.log('Delete')
                ),
                catchError(this.handleError)
            );
    }



    public getAllUsers() {
      return this.http
        .get<User[]>(API_URL + '/api/Users/GetAllUsers')
        .pipe(
          map((response) => {
            return response;
          }),
          catchError(this.handleError)
        );
     }

    public getUser(user: User) {
      return this.http
        .get(API_URL + '/api/Users/GetUser/' + user.Username)
        .pipe(
          map((response: User) => {
            //    console.log("GET", response);
            return new User(response);
          }),
          catchError(this.handleError)
        );
  }

    public registerUser(user: User) {
        return this.http
          .post<User>(API_URL + '/api/Users/RegisterUser/', user)
            .pipe(
                map(response => {
                    return response;
                }),
                catchError(this.handleError)
            );
  }

  public updateUser(user: User) {
    return this.http
      .put(API_URL + '/api/Users/UpdateUser/' + user.Id, user)
      .pipe(
        map((response: User) => {
          //console.log('PUT', response);
          return response;
        }),
        catchError(this.handleError)
      );
  }

  public deleteUser(id: number) {
    return this.http
      .delete(API_URL + '/api/Users/DeleteUser/' + id)
      .pipe(
        map((response: User) => null
          // , console.log('Delete')
        ),
        catchError(this.handleError)

      );
  }

  public authenticate(username: string, password: string) {
    return this.http
      .post<any>(API_URL + '/api/Users/Authenticate/', { username: username, password: password })
      .pipe(
        map(user => {
            console.log(user);
            console.log(user.token);
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
          return user;
        })
      )
  }
  // API: GET LOGIN
 /*
  public getUser(user: User) {
        return this.http
          .get<User>(API_URL + '/api/Users/GetUser/' + user.Id)
          .pipe(
            map((response: User) => {
                    return new User(response);
                }),
                catchError(this.handleError)
            );
    }
*/
}

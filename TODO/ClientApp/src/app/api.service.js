"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Todo_1 = require("./Todo");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var operators_2 = require("rxjs/operators");
var User_1 = require("./User");
var API_URL = 'https://localhost:44386'; //environment.apiUrl;
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.handleError = function (error) {
        console.error('ApiService::handleError', error);
        return rxjs_1.Observable.throw(error);
    };
    // API: GET /todos  deleted due to error": Observable<Todo>"
    ApiService.prototype.getAllTodos = function () {
        return this.http
            .get(API_URL + "/api/TodoItems/GetAllTodoItems")
            .pipe(operators_1.map(function (response) {
            return response;
        }), operators_2.catchError(this.handleError));
    };
    // API: POST /todos
    ApiService.prototype.createTodo = function (todo) {
        return this.http
            .post(API_URL + '/api/TodoItems/PostTodoItem/', todo)
            .pipe(operators_1.map(function (response) {
            //     console.log('POSTER', response);
            return response;
        }), operators_2.catchError(this.handleError));
    };
    // API: GET /todos/:id
    ApiService.prototype.getTodoById = function (todoId) {
        return this.http
            .get(API_URL + '/api/TodoItems/GetTodoItem/' + todoId)
            .pipe(operators_1.map(function (response) {
            //    console.log("GET", response);
            return new Todo_1.Todo(response);
        }), operators_2.catchError(this.handleError));
    };
    // API: PUT /todos/:id
    ApiService.prototype.updateTodo = function (todo) {
        return this.http
            .put(API_URL + '/api/TodoItems/PutTodoItem/' + todo.id, todo)
            .pipe(operators_1.map(function (response) {
            //console.log('PUT', response);
            return response;
        }), operators_2.catchError(this.handleError));
    };
    // API: DELETE /todos/:id
    ApiService.prototype.deleteTodoById = function (todoId) {
        return this.http
            .delete(API_URL + '/api/TodoItems/DeleteTodoItem/' + todoId)
            .pipe(operators_1.map(function (response) { return null; }
        // , console.log('Delete')
        ), operators_2.catchError(this.handleError));
    };
    // API: POST SIGNIN
    ApiService.prototype.createAccount = function (user) {
        return this.http
            .post(API_URL + 'signin/api/Users/CreateAccount/', user)
            .pipe(operators_1.map(function (response) {
            return response;
        }), operators_2.catchError(this.handleError));
    };
    // API: GET LOGIN
    ApiService.prototype.getAccount = function (user) {
        return this.http
            .get(API_URL + '/api/Users/GetAccount/' + user)
            .pipe(operators_1.map(function (response) {
            return new User_1.User(response);
        }), operators_2.catchError(this.handleError));
    };
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map
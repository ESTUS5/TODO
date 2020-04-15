import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { TodoDataService } from './todo-data.service';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LoginComponent } from './log-in/log-in.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SigninComponent } from './sign-in/sign-in.component';
import { UsersService } from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginComponent,
    SigninComponent,
    TodoListComponent,
    TodoListHeaderComponent,
    TodoListItemComponent,
    TodosComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
    ],
    providers: [ApiService, TodoDataService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

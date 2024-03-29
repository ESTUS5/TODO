import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosComponent } from '../todos/todos.component';
import { LoginComponent } from '../log-in/log-in.component';
import { SigninComponent } from '../sign-in/sign-in.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { TodosResolver } from '../../todos.resolver';
import { AuthGuard } from '../guard/auth.guard';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'todos',
        pathMatch: 'full'
    },
    {
        path: 'todos',
        component: TodosComponent,
        resolve: {
            todos: TodosResolver
        },
        //canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signin',
        component: SigninComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [TodosResolver]
})

//export const routing = RouterModule.forRoot(routes);

export class AppRoutingModule { }

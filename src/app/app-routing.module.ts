import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { UserGuard } from './guards/user.guard';


const routes: Routes = [
  {path: 'todo', component: TodoComponent, canActivate: [UserGuard], data: {animation: 'todo'}},
  {path: 'user/:username', component: UserComponent, canActivate: [UserGuard], data: {animation: 'user'}},
  {path: 'login', component: LoginComponent, data: {animation: 'login'}},
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
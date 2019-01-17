import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupPage} from './pages/signup/signup.page';
import {ToDoListPage} from './pages/to-do-list/to-do-list.page';
import {SigninPage} from './pages/signin/signin.page';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupPage
  },
  {
    path: 'signin',
    component: SigninPage
  },
  {
    path: 'to-do-list',
    component: ToDoListPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

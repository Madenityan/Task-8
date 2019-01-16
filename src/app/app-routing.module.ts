import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupPage} from './pages/signup/signup.page';
import {ToDoListPage} from './pages/to-do-list/to-do-list.page';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupPage
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

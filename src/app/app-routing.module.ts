import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupPage} from './pages/signup/signup.page';
import {ToDoListPage} from './pages/to-do-list/to-do-list.page';
import {SigninPage} from './pages/signin/signin.page';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  { path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },
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
    component: ToDoListPage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

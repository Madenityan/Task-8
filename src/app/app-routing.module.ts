import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupPage} from './components/signup/signup.page';
import {ToDoListPage} from './components/to-do-list/to-do-list.page';
import {SigninPage} from './components/signin/signin.page';
import {AuthGuard} from './guards/auth.guard';
import {UserProfilePage} from './components/user-profile/user-profile.page';

const routes: Routes = [
  { path: '',
    redirectTo: 'to-do-list',
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
  },
  {
    path: 'profile',
    component: UserProfilePage,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

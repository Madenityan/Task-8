import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListPage } from './pages/to-do-list/to-do-list.page';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignupPage } from './pages/signup/signup.page';
import { SigninPage } from './pages/signin/signin.page';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './services/http.service';
import {AuthGuard} from './auth/auth.guard';
import { UserProfilePage } from './pages/user-profile/user-profile.page';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListPage,
    SignupPage,
    SigninPage,
    UserProfilePage,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

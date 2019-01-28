import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserForm} from '../../models/userForm';
import {Router} from '@angular/router';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss']
})
export class SigninPage implements OnInit {

  public signInForm: FormGroup;
  public user: UserForm;

  constructor(private router: Router, private httpService: HttpService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  saveToken(data) {
    localStorage.setItem('token', data.token);
  }

  submitLogin() {
    this.httpService.login(this.signInForm.value).subscribe(
      (data: {token: string}) => {
        if (data.token) {
          this.saveToken(data);
          this.router.navigate(['/to-do-list']);
        }
      });
  }
}
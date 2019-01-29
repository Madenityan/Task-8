import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpService} from '../../services/http.service';
import {UserForm} from '../../models/userForm';
import {Router} from '@angular/router';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {

  public signUpForm: FormGroup;
  public user: UserForm;

  constructor(private router: Router, private httpService: HttpService, private formBuilder: FormBuilder) { }
  ngOnInit() {

    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  getOptions() {
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return options;
  }

  public submit() {
    const body = this.signUpForm.value;
    const options = this.getOptions();

    this.httpService.post('registration', body, options).subscribe((data: {token: string}) => {
      if (data.token) {
        this.router.navigate(['/signin']);
      }
    });
  }
}

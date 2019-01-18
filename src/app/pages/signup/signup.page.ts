import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpService} from '../../services/http.service';
import {UserForm} from '../../models/userForm';
import {Router} from '@angular/router';


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

  public submit() {
    console.log(this.signUpForm, this.signUpForm.value);
    this.httpService.registration(this.signUpForm.value).subscribe((data: {token: string}) => {
      if (data.token) {
        this.router.navigate(['/signin']);
      }
    });
  }
}

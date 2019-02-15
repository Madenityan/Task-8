import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserForm} from '../../models/userForm';
import {Router} from '@angular/router';
import {HttpService} from '../../services/http.service';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss']
})
export class SigninPage implements OnInit, OnDestroy {

  public signInForm: any = FormGroup;
  public user: any = UserForm;

  constructor(private router: Router, private httpService: HttpService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  getOptions(): any {
    const options: object = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return options;
  }

  saveToken(data): void {
    localStorage.setItem('token', data.token);
  }

  // sent post request
  submitLogin(): void {
    const body: any = this.signInForm.value;
    const options: any = this.getOptions();

    this.httpService.post('login', body, options).subscribe((data: {token: string}) => {
      if (data.token) {
        this.saveToken(data);
        this.router.navigate(['/to-do-list']);
      }
    });
  }

  ngOnDestroy() {
    this.signInForm.unsubscribe();
  }
}

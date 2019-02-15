import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpService} from '../../services/http.service';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss']
})
export class UserProfilePage implements OnInit {

  public profileForm: any = FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private httpService: HttpService) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  changeProfile(): void {
    const token: string = localStorage.getItem('token');
    const body: any = this.profileForm.value;
    const options: object = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-apikey': token
      })
    };
    this.httpService.put('user', body, options).subscribe((data) => {
      console.log(data);
    },
      error => console.log(error)
      );
  }
}

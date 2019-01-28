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

  public profileForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private httpService: HttpService) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  changeProfile() {
    console.log(this.profileForm, this.profileForm.value);
    const token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-apikey': token
      })
    };
    this.httpService.updateUserInfo(this.profileForm.value, options).subscribe((data) => {
      console.log(data);
    },
      error => console.log(error)
      );
  }
}

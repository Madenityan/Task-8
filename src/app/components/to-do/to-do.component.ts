import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {HttpService} from '../../services/http.service';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  form;
  public tasks = [];

  constructor(private formBuilder: FormBuilder, private httpService: HttpService) {
    this.form = this.formBuilder.group({
      tasks: this.formBuilder.array([ this.createTaskField() ])
    });
  }
  ngOnInit() {}

  addTask(): void {
    this.form.controls['tasks'].push(this.createTaskField());
    const token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-apikey': token
      })
    };

    this.httpService.post('todolist', options).subscribe((data => {
      this.tasks = data;
    }));
  }

  createTaskField(): FormControl {
    return this.formBuilder.control('');
  }
}

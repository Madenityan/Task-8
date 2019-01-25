import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {HttpService} from '../../services/http.service';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-title-to-do',
  templateUrl: './title-to-do.component.html',
  styleUrls: ['./title-to-do.component.scss']
})
export class TitleToDoComponent implements OnInit {

  formTitle;
  public title = [];
  public lists = [];
  public condition = true;

  constructor(private formBuilder: FormBuilder, private httpService: HttpService) { }

  ngOnInit() {
    this.formTitle = this.formBuilder.group({
      title: this.formBuilder.array([this.createTitleField()])
    });
  }

  addTitle(): void {
    this.formTitle.controls['title'].push(this.createTitleField());
  }

  createTitleField(): FormControl {
    return this.formBuilder.control('');
  }

  addNewList() {
    const token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders({
        // 'Content-Type':  'application/json',
        'x-apikey': token
      })
    };

    this.httpService.get('todolist', options).subscribe((data => {
      this.lists.push({
        tasks: []
      });
      // this.lists = data;
    }));

    this.condition = !this.condition;
  }
}

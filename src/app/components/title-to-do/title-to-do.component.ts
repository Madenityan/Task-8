import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }

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
    this.lists.push({
      tasks: []
    });
    this.condition = !this.condition;
  }
}

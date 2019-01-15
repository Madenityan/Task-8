import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  
  form;
  public tasks = [];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      tasks: this.formBuilder.array([ this.createTaskField() ])
    });
    console.log(this.form);
  }

  addTask(): void {
    this.form.controls['tasks'].push(this.createTaskField());
  }

  createTaskField(): FormControl {
    return this.formBuilder.control('');
  }

  // deleteTask(index: number) {
  //   this.form.controls['tasks'].splice(index, 1);
  // }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {HttpService} from '../../services/http.service';

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
  public hide = true;

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

  addNewTitle() {
    this.httpService.createTitle(this.formTitle.value).subscribe((data) => {
        console.log(data);
      },
      error => console.log(error)
    );
    // this.hide = !this.hide;
  }

  addNewList() {
    this.lists.push({
      tasks: []
    });
    this.condition = !this.condition;
  }
}

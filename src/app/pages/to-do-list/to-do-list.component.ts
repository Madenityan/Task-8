import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  lists = [];

  constructor() { }

  ngOnInit() {
  }

  addNewList() {
    this.lists.push({
      tasks: []
    });
  }

}

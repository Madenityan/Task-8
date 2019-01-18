import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.page.html',
  styleUrls: ['./to-do-list.page.scss']
})
export class ToDoListPage implements OnInit {
  lists = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addNewList() {
    this.lists.push({
      tasks: []
    });
  }

  clearLocalStorage() {
    localStorage.clear();
    this.router.navigate(['/signin']);
  }

}

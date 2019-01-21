import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.page.html',
  styleUrls: ['./to-do-list.page.scss']
})
export class ToDoListPage implements OnInit {

  lists = [];
  public condition:boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addNewTitle() {
    this.lists.push({
      title: []
    });
  }

  // addNewList() {
  //   this.lists.push({
  //     tasks: []
  //   });
  // }

  clearLocalStorage() {
    localStorage.clear();
    this.router.navigate(['/signin']);
  }

  regirect() {
    this.router.navigate(['/profile']);
  }

}

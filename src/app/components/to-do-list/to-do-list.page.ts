import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpHeaders} from '@angular/common/http';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.page.html',
  styleUrls: ['./to-do-list.page.scss']
})
export class ToDoListPage implements OnInit {

  lists = [];
  titleTask = '';

  constructor(private router: Router, private httpService:HttpService) { }

  clearLocalStorage() {
    localStorage.clear();
    this.router.navigate(['/signin']);
  }

  regirect() {
    this.router.navigate(['/profile']);
  }

  getOptions() {
    const token = localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-apikey': token
      })
    };
    return options;
  }

  ngOnInit() {
    const options = this.getOptions();
    this.httpService.get('todolist', options).subscribe((data => {
      const lists = [];
      this.lists = data;
      console.log(data);
    }));
  }

  addNewTask() {
    const token = localStorage.getItem('token');

    this.lists.unshift({
      userId: token,
      title: '',
      description: '',
      status: 'undone',
      selected: false
    });
  }

  saveTask(item) {
    const body = item;
    const options = this.getOptions();

    this.httpService.post('todolist', body, options).subscribe((data => {
    }));
  }

  removeTask(id, item) {
    const options = this.getOptions();
    this.lists.forEach(function(i, index, object) {
      if (i._id === item._id) {
        object.splice(index, 1);
      }
    });

    this.httpService.delete('todolist/' + id, options).subscribe((data => {
      this.lists.forEach(function(i, index, object) {
        if (i._id === item._id) {
          object.splice(index, 1);
        }
      });
    }));
  }

  updateTask(id, item) {
    const body = item;
    delete body['_id'];
    const options = this.getOptions();

    this.httpService.put('todolist/' + id, body, options).subscribe((data => {

    }));
  }

  sortAsc(): void {
    this.lists.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  }

  sortDesc(): void {
    this.lists.sort((a, b) => {
      if (a.title > b.title) {
        return -1;
      }
      if (a.title < b.title) {
        return 1;
      }
      return 0;
    });
  }
}

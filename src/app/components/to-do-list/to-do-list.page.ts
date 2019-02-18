import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpHeaders} from '@angular/common/http';
import {HttpService} from '../../services/http.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.page.html',
  styleUrls: ['./to-do-list.page.scss']
})
export class ToDoListPage implements OnInit, OnDestroy {

  public lists: Array<any> = [];
  public titleTask: string = '';
  public subscriptions: Array<Subscription> = [];

  constructor(private router: Router, private httpService: HttpService) { }

  // Redirect to pages

  clearLocalStorage(): void {
    localStorage.clear();
    this.router.navigate(['/signin']);
  }

  regirectToProfile(): void {
    this.router.navigate(['/profile']);
  }

  regirectToLogin(): void {
    this.router.navigate(['/signin']);
  }

  regirectToRegister(): void {
    this.router.navigate(['/signup']);
  }

  // Saved token and headers
  getOptions(): any {
    const token: string = localStorage.getItem('token');
    const options: object = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-apikey': token
      })
    };
    return options;
  }

  ngOnInit(): void {
    const options: any = this.getOptions();
    this.subscriptions.push(
      this.httpService.get('todolist', options).subscribe((data => {
        const lists: Array<object> = [];
        this.lists = data;
      }))
    );
  }

  ngOnDestroy() {
    this.subscriptions.map(subscription => {
      subscription.unsubscribe();
    });
  }

  // add new item
  addNewTask(): void {
    const token: string = localStorage.getItem('token');
    this.lists.unshift({
      userId: token,
      title: '',
      description: '',
      status: 'undone',
      selected: false
    });
  }

  // save item
  saveTask(item): void {
    const body: any = item;
    const options: any = this.getOptions();
    this.subscriptions.push(
      this.httpService.post('todolist', body, options).subscribe(data => {
        this.httpService.get('todolist', options).subscribe(d => {
          this.lists = d;
        });
      })
    );
  }

  // remove items
  removeTask(id, item): void {
    const options: any = this.getOptions();
    this.lists.forEach(function(i, index, object) {
      if (i._id === item._id) {
        object.splice(index, 1);
      }
    });
    this.subscriptions.push(
      this.httpService.delete('todolist/' + id, options).subscribe((data => {
        this.lists.forEach(function(i, index, object) {
          if (i._id === item._id) {
            object.splice(index, 1);
          }
        });
      }))
    );
  }

  // update item
  updateTask(item): void {
    const body: any = {
      description: item.description,
      userId: item.userId,
      status: item.status,
      selected: item.selected,
      title: item.title
    };
    const options: any = this.getOptions();
    this.subscriptions.push(
      this.httpService.put('todolist/' + item._id, body, options).subscribe((data => {
      }))
    );
  }

  // sort item
  sortAsc(): any {
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

  sortDesc(): any {
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

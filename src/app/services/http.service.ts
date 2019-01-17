import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private http: HttpClient) {}

  registration(params) {
    return this.http.post('https://lectorium.herokuapp.com/api/registration', params);
  }

  login(params) {
    return this.http.post('https://lectorium.herokuapp.com/api/login', params);
  }
}

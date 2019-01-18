import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {getUrl} from '../../api/get-url';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private http: HttpClient) {}

  registration(params) {
    return this.http.post(getUrl('registration'), params);
  }

  login(params) {
    return this.http.post(getUrl('login'), params);
  }

  updateUserInfo(params, options) {
    return this.http.put(getUrl('user'), params, options);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  private headers: any = HttpHeaders;
  private baseUrl: any = environment.baseUrl;

  static objectToFormData(object: any): HttpParams {
    let params = new HttpParams();
    Object.keys(object).forEach(key => {
      params = params.set(key, object[key]);
    });
    return params;
  }
  private setOptionsToHeader(options): any {
    Object.keys(options).forEach(key => {
      this.headers.append(key, options[key]);
    });
  }

  constructor(private http: HttpClient) {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    this.headers = headers;
  }

  public get(path: string, options?: {}): Observable<any> {
    options = Object.assign({}, {headers: this.headers}, options);
    return this.http.get(`${this.baseUrl}${path}`, options);
  }

  public post(path: string, body: any | null, options?: {}): Observable<any> {
    if (options) {
      this.setOptionsToHeader(options);
    }
    options = Object.assign({}, {headers: this.headers}, options);
    return this.http.post(`${this.baseUrl}${path}`, body, options);
  }

  public put(path: string, body: any | null, options?: {}): Observable<any> {
    options = Object.assign({}, {headers: this.headers}, options);
    return this.http.put(`${this.baseUrl}${path}`, body, options);
  }

  public delete(url, options): any {
    return this.http.request('delete', `${this.baseUrl}${url}`, options);
  }
}

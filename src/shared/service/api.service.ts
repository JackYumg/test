import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true
  };
  constructor(
    private http: HttpClient
  ) { }

  // get请求
  getData(url, data): Observable<any> {
    return this.http.get(url + new HttpParams({
      fromObject: data
    }), this.options);
  }
}

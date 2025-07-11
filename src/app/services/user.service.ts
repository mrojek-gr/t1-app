import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(page: number = 1): Observable<any> {
    const headers = new HttpHeaders().set('x-api-key', 'reqres-free-v1');
    const params = new HttpParams().set('page', page);

    return this.http.get(this.apiUrl, { headers, params });
  }

  getUserById(id: number): Observable<any> {
    const headers = new HttpHeaders().set('x-api-key', 'reqres-free-v1');

    return this.http.get(`${this.apiUrl}/${id}`, { headers });
  }
}

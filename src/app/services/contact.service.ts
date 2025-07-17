import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'https://reqres.in/api/contact';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('x-api-key', 'reqres-free-v1');
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  contact(email: string, message: string): Observable<any> {
    const headers = this.getAuthHeaders();
    const body = { email, message };

    return this.http.post(this.apiUrl, body, { headers });
  }
}

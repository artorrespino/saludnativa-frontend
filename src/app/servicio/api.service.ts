import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(baseUrl: string, endpoint: string): Observable<T> {
    const url = `${baseUrl}/${endpoint}`;
    return this.http.get<T>(url);
  }

  post<T>(baseUrl: string, endpoint: string, data: any): Observable<T> {
    const url = `${baseUrl}/${endpoint}`;
    return this.http.post<T>(url, data);
  }

  put<T>(baseUrl: string, endpoint: string, data: any): Observable<T> {
    const url = `${baseUrl}/${endpoint}`;
    return this.http.put<T>(url, data);
  }

  delete<T>(baseUrl: string, endpoint: string): Observable<T> {
    const url = `${baseUrl}/${endpoint}`;
    return this.http.delete<T>(url);
  }
}
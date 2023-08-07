import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Rol } from '../modelos';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private endpoint = 'rol';
  http: any;

  constructor(private apiService: ApiService) { }

  getRoles(): Observable<Rol[]>{
    return this.apiService.get<Rol[]>(this.endpoint);
  }

  getRolId(id: number): Observable<Rol> {
    return this.apiService.get<Rol>(`${this.endpoint}/${id}`);
  }

}
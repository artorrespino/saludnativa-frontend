import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Rol } from '../modelos';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  // Define las URLs base para tus tres microservicios
  private baseUrlMicroservicio1 = 'http://localhost:8080/api';
  //private baseUrlMicroservicio2 = 'http://localhost:8081/api';
  //private baseUrlMicroservicio3 = 'http://localhost:8082/api';

  constructor(private apiService: ApiService) { }

  getRoles(): Observable<Rol[]> {
    const endpoint = 'roles';
    return this.apiService.get<Rol[]>(this.baseUrlMicroservicio1, endpoint);
  }

  getRolesId(id: number): Observable<Rol> {
    const endpoint = 'roles';
    return this.apiService.get<Rol>(this.baseUrlMicroservicio1, `${endpoint}/${id}`);
  }

}
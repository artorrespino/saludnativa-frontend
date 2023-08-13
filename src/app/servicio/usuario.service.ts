import { Injectable } from '@angular/core';
import { Usuario, Rol } from '../modelos';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // Define las URLs base para tus tres microservicios
  private baseUrlMicroservicio1 = 'http://localhost:8080/api';
  //private baseUrlMicroservicio2 = 'http://localhost:8081/api';
  //private baseUrlMicroservicio3 = 'http://localhost:8082/api';

  constructor(private apiService: ApiService) { }

  getUsuarios(): Observable<Usuario[]> {
    const endpoint = 'usuarios';
    return this.apiService.get<Usuario[]>(this.baseUrlMicroservicio1, endpoint);
  }

  createUsuario(usuario: Usuario): Observable<Usuario> {
    const endpoint = 'usuarios';
    return this.apiService.post<Usuario>(this.baseUrlMicroservicio1, endpoint, usuario);
  }

  getUsuarioId(id: number): Observable<Usuario> {
    const endpoint = 'usuarios';
    return this.apiService.get<Usuario>(this.baseUrlMicroservicio1, `${endpoint}/${id}`);
  }

  updateUsuario(usuario: Usuario): Observable<Usuario> {
    const endpoint = 'usuarios';
    return this.apiService.put<Usuario>(this.baseUrlMicroservicio1, endpoint, usuario);
  }

  deleteUsuario(usuario: Usuario): Observable<Usuario> {
    const endpoint = 'usuarios';
    return this.apiService.delete<Usuario>(this.baseUrlMicroservicio1, `${endpoint}/${usuario.idUsuario}`);
  }

  getRoles(): Observable<Rol[]> {
    const endpoint = 'rol';
    return this.apiService.get<Rol[]>(this.baseUrlMicroservicio1, endpoint);
  }
}

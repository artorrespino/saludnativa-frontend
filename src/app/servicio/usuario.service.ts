import { Injectable } from '@angular/core';
import { Estado,Usuario, Rol } from '../modelos';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private endpoint = 'usuarios';
  http: any;

  constructor(private apiService: ApiService) { }

  getUsuarios(): Observable<Usuario[]>{
    return this.apiService.get<Usuario[]>(this.endpoint);
  }

  getUsuariosActivos(): Observable<Usuario[]> {
    const endpoint = 'usuariosactivos';
    return this.apiService.get<Usuario[]>(endpoint);
  }
  
  createUsuario(usuario: Usuario): Observable<Usuario> {
    return this.apiService.post<Usuario>(this.endpoint, usuario);
  }

  getUsuarioId(id: number): Observable<Usuario> {
    return this.apiService.get<Usuario>(`${this.endpoint}/${id}`);
  }

  updateUsuario(usuario: Usuario): Observable<Usuario> {
    return this.apiService.put<Usuario>(this.endpoint, usuario);
  }

  deleteUsuario(usuario: Usuario): Observable<Usuario> {
    return this.apiService.delete<Usuario>(`${this.endpoint}/${usuario.id_usuario}`);
  }

  getEstados(): Observable<Estado[]> {
    const endpoint = 'estados';
    return this.apiService.get<Estado[]>(endpoint);
  }

  getRoles():  Observable<Rol[]> {
    const endpoint = 'rol';
    return this.apiService.get<Rol[]>(endpoint);

  }
}

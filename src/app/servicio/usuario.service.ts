import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado,Usuario, Rol } from '../modelos';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/api/usuarios';

  getUsuario() {
    return this.http.get<Usuario[]>(this.url);
  }
/*
  getUsuarioActivo(){
    const urlUsuarioActivo = 'http://localhost:8080/api/usuariosactivos';
    return this.http.get<Usuario[]>(urlUsuarioActivo);

  }
*/

  createUsuario(usuario: Usuario){7
    
    return this.http.post<Usuario>(this.url, usuario);
  }

  getUsuarioId(id:number){
    return this.http.get<Usuario>(this.url+"/"+id);
  }

  updateUsuario(usuario:Usuario){
    return this.http.put<Usuario>(this.url,usuario);
  }

  deleteUsuario(usuario:Usuario){
    return this.http.delete<Usuario>(this.url+"/"+usuario.id_usuario);
  }

  getRol() {
    const urlRol = 'http://localhost:8080/api/rol';
    return this.http.get<Rol[]>(urlRol);
  }

  getEstado() {
    const urlEstado = 'http://localhost:8080/api/estados';
    return this.http.get<Estado[]>(urlEstado);
  }






}

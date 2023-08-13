import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Cliente } from '../modelos/Cliente';
import { Observable } from 'rxjs';
import { TipoDocIdentidad } from '../modelos/TipoDocIdentidad';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // Define las URLs base para tus tres microservicios
  //private baseUrlMicroservicio1 = 'http://localhost:8080/api';
  private baseUrlMicroservicio2 = 'http://localhost:8081/api';
  //private baseUrlMicroservicio3 = 'http://localhost:8082/api';

  constructor(private apiService: ApiService) { }

  getClientes(): Observable<Cliente[]> {
    const endpoint = 'clientes';
    return this.apiService.get<Cliente[]>(this.baseUrlMicroservicio2, endpoint);
  }

  createCliente(usuario: Cliente): Observable<Cliente> {
    const endpoint = 'clientes';
    return this.apiService.post<Cliente>(this.baseUrlMicroservicio2, endpoint, usuario);
  }

  getClienteId(id: number): Observable<Cliente> {
    const endpoint = 'clientes';
    return this.apiService.get<Cliente>(this.baseUrlMicroservicio2, `${endpoint}/${id}`);
  }

  updateCliente(usuario: Cliente): Observable<Cliente> {
    const endpoint = 'clientes';
    return this.apiService.put<Cliente>(this.baseUrlMicroservicio2, endpoint, usuario);
  }

  deleteCliente(usuario: Cliente): Observable<Cliente> {
    const endpoint = 'clientes';
    return this.apiService.delete<Cliente>(this.baseUrlMicroservicio2, `${endpoint}/${usuario.idCliente}`);
  }

  getTiposDocIdentidad(): Observable<TipoDocIdentidad[]> {
    const endpoint = 'tipo-doc-identidad';
    return this.apiService.get<TipoDocIdentidad[]>(this.baseUrlMicroservicio2, endpoint);
  }
}

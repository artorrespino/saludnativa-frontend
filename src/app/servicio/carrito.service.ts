import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Pedido } from '../modelos/Pedido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  // Define las URLs base para tus tres microservicios
  //private baseUrlMicroservicio1 = 'http://localhost:8080/api';
  private baseUrlMicroservicio2 = 'http://localhost:8081/api';
  //private baseUrlMicroservicio3 = 'http://localhost:8082/api';

  constructor(private apiService: ApiService) { }

  createPedido(pedido: Pedido): Observable<Pedido> {
    const endpoint = 'pedidos';
    return this.apiService.post<Pedido>(this.baseUrlMicroservicio2, endpoint, pedido);
  }
}

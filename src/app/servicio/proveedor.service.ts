import { Injectable } from '@angular/core';
import { Proveedor} from '../modelos';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  // Define las URLs base para tus tres microservicios
    //private baseUrlMicroservicio1 = 'http://localhost:8080/api';
    //private baseUrlMicroservicio2 = 'http://localhost:8081/api';
    private baseUrlMicroservicio3 = 'http://localhost:8082/api';


  constructor(private apiService: ApiService) { }

  getProveedores(): Observable<Proveedor[]>{
    const endpoint = 'proveedores';
    return this.apiService.get<Proveedor[]>(this.baseUrlMicroservicio3,endpoint);
  }

  createProveedor(proveedor: Proveedor): Observable<Proveedor> {
    const endpoint = 'proveedores';
    return this.apiService.post<Proveedor>(this.baseUrlMicroservicio3,endpoint, proveedor);
  }

  getProveedorId(id: number): Observable<Proveedor> {
    const endpoint = 'proveedores';
    return this.apiService.get<Proveedor>(this.baseUrlMicroservicio3,`${endpoint}/${id}`);
  }

  updateProveedor(proveedor: Proveedor): Observable<Proveedor> {
    const endpoint = 'proveedores';
    return this.apiService.put<Proveedor>(this.baseUrlMicroservicio3,endpoint, proveedor);
  }

  deleteProveedor(proveedor: Proveedor): Observable<Proveedor> {
    const endpoint = 'proveedores';
    return this.apiService.delete<Proveedor>(this.baseUrlMicroservicio3,`${endpoint}/${proveedor.idProveedor}`);
  }

}

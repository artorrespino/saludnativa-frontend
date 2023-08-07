import { Injectable } from '@angular/core';
import { Estado, Proveedor,Rol } from '../modelos';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private endpoint = 'proveedores';
  http: any;

  constructor(private apiService: ApiService) { }

  getProveedores(): Observable<Proveedor[]>{
    return this.apiService.get<Proveedor[]>(this.endpoint);
  }

  getProveedoresActivos(): Observable<Proveedor[]> {
    const endpoint = 'proveedoresactivos';
    return this.apiService.get<Proveedor[]>(endpoint);
  }

  createProveedor(proveedor: Proveedor): Observable<Proveedor> {
    return this.apiService.post<Proveedor>(this.endpoint, proveedor);
  }

  getProveedorId(id: number): Observable<Proveedor> {
    return this.apiService.get<Proveedor>(`${this.endpoint}/${id}`);
  }

  updateProveedor(proveedor: Proveedor): Observable<Proveedor> {
    return this.apiService.put<Proveedor>(this.endpoint, proveedor);
  }

  deleteProveedor(proveedor: Proveedor): Observable<Proveedor> {
    return this.apiService.delete<Proveedor>(`${this.endpoint}/${proveedor.id_proveedor}`);
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

import { Injectable } from '@angular/core';
import { CategoriaProducto,Producto,Proveedor } from '../modelos/';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

    // Define las URLs base para tus tres microservicios
    //private baseUrlMicroservicio1 = 'http://localhost:8080/api';
    //private baseUrlMicroservicio2 = 'http://localhost:8081/api';
    private baseUrlMicroservicio3 = 'http://localhost:8082/api';

  constructor(private apiService: ApiService) { }

  getProductos(): Observable<Producto[]>{
    const endpoint = 'productos';
    return this.apiService.get<Producto[]>(this.baseUrlMicroservicio3,endpoint);
  }

  createProducto(producto: Producto): Observable<Producto> {
    const endpoint = 'productos';
    return this.apiService.post<Producto>(this.baseUrlMicroservicio3,endpoint, producto);
  }

  getProductoId(id: number): Observable<Producto> {
    const endpoint = 'productos';
    return this.apiService.get<Producto>(this.baseUrlMicroservicio3,`${endpoint}/${id}`);
  }

  updateProducto(producto: Producto): Observable<Producto> {
    const endpoint = 'productos';
    return this.apiService.put<Producto>(this.baseUrlMicroservicio3,endpoint, producto);
  }

  deleteProducto(producto: Producto): Observable<Producto> {
    const endpoint = 'productos';
    return this.apiService.delete<Producto>(this.baseUrlMicroservicio3,`${endpoint}/${producto.idProducto}`);
  }

  getCategoriaProducto(): Observable<CategoriaProducto[]> {
    const endpoint = 'categorias';
    return this.apiService.get<CategoriaProducto[]>(this.baseUrlMicroservicio3,endpoint);
  }

  getProveedor(): Observable<Proveedor[]> {
    const endpoint = 'proveedores';
    return this.apiService.get<Proveedor[]>(this.baseUrlMicroservicio3,endpoint);
  }
}

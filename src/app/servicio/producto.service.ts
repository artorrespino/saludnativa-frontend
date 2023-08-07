import { Injectable } from '@angular/core';
import { CategoriaProducto,Producto,Proveedor } from '../modelos/';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private endpoint = 'productos';
  http: any;

  constructor(private apiService: ApiService) { }

  getProductos(): Observable<Producto[]>{
    return this.apiService.get<Producto[]>(this.endpoint);
  }

  createProducto(producto: Producto): Observable<Producto> {
    return this.apiService.post<Producto>(this.endpoint, producto);
  }

  getProductoId(id: number): Observable<Producto> {
    return this.apiService.get<Producto>(`${this.endpoint}/${id}`);
  }

  updateProducto(producto: Producto): Observable<Producto> {
    return this.apiService.put<Producto>(this.endpoint, producto);
  }

  deleteProducto(producto: Producto): Observable<Producto> {
    return this.apiService.delete<Producto>(`${this.endpoint}/${producto.id_producto}`);
  }

  getCategoriaProducto(): Observable<CategoriaProducto[]> {
    const endpoint = 'categorias';
    return this.apiService.get<CategoriaProducto[]>(endpoint);
  }

  getProveedor(): Observable<Proveedor[]> {
    const endpoint = 'proveedores';
    return this.apiService.get<Proveedor[]>(endpoint);
  }
}

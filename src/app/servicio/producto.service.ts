import { Injectable } from '@angular/core';
import { CategoriaProducto } from '../modelos/CategoriaProducto';
import { Producto } from '../modelos/Producto';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from '../modelos/Proveedor';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/api/productos';

  getProductos(){
    return this.http.get<Producto[]>(this.url);
  }

  createProducto(producto: Producto){7
    
    return this.http.post<Producto>(this.url, producto1);
  }

  getProductoId(id:number){
    return this.http.get<Producto>(this.url+"/"+id);
  }

  updateProducto(producto:Producto){
    return this.http.put<Producto>(this.url,producto);
  }

  deleteProducto(producto:Producto){
    return this.http.delete<Producto>(this.url+"/"+producto.id_producto);
  }

  getCategoriaProducto() {
    const urlCategoriaProducto = 'http://localhost:8080/api/categorias';
    return this.http.get<CategoriaProducto[]>(urlCategoriaProducto);
  }

  getProveedor() {
    const urlProveedor = 'http://localhost:8080/api/proveedores';
    return this.http.get<Proveedor[]>(urlProveedor);
  }
}

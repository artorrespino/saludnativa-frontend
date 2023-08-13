import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { CategoriaProducto } from '../modelos';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

    // Define las URLs base para tus tres microservicios
    //private baseUrlMicroservicio1 = 'http://localhost:8080/api';
    //private baseUrlMicroservicio2 = 'http://localhost:8081/api';
    private baseUrlMicroservicio3 = 'http://localhost:8082/api';
    

  constructor(private apiService: ApiService) { }

  getCategorias(): Observable<CategoriaProducto[]>{
    const endpoint = 'categorias';
    return this.apiService.get<CategoriaProducto[]>(this.baseUrlMicroservicio3,endpoint);
  }

  createCategoria(categoria: CategoriaProducto): Observable<CategoriaProducto> {
    const endpoint = 'categorias';
    return this.apiService.post<CategoriaProducto>(this.baseUrlMicroservicio3,endpoint, categoria);
  }

  getCategoriaId(id: number): Observable<CategoriaProducto> {
    const endpoint = 'categorias';
    return this.apiService.get<CategoriaProducto>(this.baseUrlMicroservicio3,`${endpoint}/${id}`);
  }

  updateCategoria(categoria: CategoriaProducto): Observable<CategoriaProducto> {
    const endpoint = 'categorias';
    return this.apiService.put<CategoriaProducto>(this.baseUrlMicroservicio3,endpoint, categoria);
  }

  deleteCategoria(categoria: CategoriaProducto): Observable<CategoriaProducto> {
    const endpoint = 'categorias';
    return this.apiService.delete<CategoriaProducto>(this.baseUrlMicroservicio3,`${endpoint}/${categoria.idCategoria}`);
  }

}

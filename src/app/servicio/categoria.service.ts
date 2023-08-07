import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { CategoriaProducto } from '../modelos';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private endpoint = 'categorias';
  http: any;

  constructor(private apiService: ApiService) { }

  getCategorias(): Observable<CategoriaProducto[]>{
    return this.apiService.get<CategoriaProducto[]>(this.endpoint);
  }

  createCategoria(categoria: CategoriaProducto): Observable<CategoriaProducto> {
    return this.apiService.post<CategoriaProducto>(this.endpoint, categoria);
  }

  getCategoriaId(id: number): Observable<CategoriaProducto> {
    return this.apiService.get<CategoriaProducto>(`${this.endpoint}/${id}`);
  }

  updateCategoria(categoria: CategoriaProducto): Observable<CategoriaProducto> {
    return this.apiService.put<CategoriaProducto>(this.endpoint, categoria);
  }

  deleteCategoria(categoria: CategoriaProducto): Observable<CategoriaProducto> {
    return this.apiService.delete<CategoriaProducto>(`${this.endpoint}/${categoria.id_categoria_producto}`);
  }

}

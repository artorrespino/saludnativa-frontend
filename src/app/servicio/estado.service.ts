import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Estado } from '../modelos';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private endpoint = 'estados';
  http: any;

  constructor(private apiService: ApiService) { }

  getEstados(): Observable<Estado[]>{
    return this.apiService.get<Estado[]>(this.endpoint);
  }

  getEstadoId(id: number): Observable<Estado> {
    return this.apiService.get<Estado>(`${this.endpoint}/${id}`);
  }

}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado, Proveedor } from '../modelos';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/api/proveedores';

  getProveedor() {
    return this.http.get<Proveedor[]>(this.url);
  }

  getProveedorActivo(){
    const urlProveedorActivo = 'http://localhost:8080/api/proveedoresactivos';
    return this.http.get<Proveedor[]>(urlProveedorActivo);

  }

  createProveedor(proveedor: Proveedor){7
    
    return this.http.post<Proveedor>(this.url, proveedor);
  }

  getProveedorId(id:number){
    return this.http.get<Proveedor>(this.url+"/"+id);
  }

  updateProveedor(proveedor:Proveedor){
    return this.http.put<Proveedor>(this.url,proveedor);
  }

  deleteProveedor(proveedor:Proveedor){
    return this.http.delete<Proveedor>(this.url+"/"+proveedor.id_proveedor);
  }

  getEstado() {
    const urlEstado = 'http://localhost:8080/api/estados';
    return this.http.get<Estado[]>(urlEstado);
  }
}

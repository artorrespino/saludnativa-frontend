import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CategoriaProducto, Proveedor } from 'src/app/modelos';
import { ProductoService } from 'src/app/servicio';

@Injectable({
  providedIn: 'root',
})
export class ListadoService {
  private listaCategoriasSubject: BehaviorSubject<CategoriaProducto[]> = new BehaviorSubject<CategoriaProducto[]>([]);
  private listaProveedoresSubject: BehaviorSubject<Proveedor[]> = new BehaviorSubject<Proveedor[]>([]);

  listaCategorias$: Observable<CategoriaProducto[]> = this.listaCategoriasSubject.asObservable();
  listaProveedores$: Observable<Proveedor[]> = this.listaProveedoresSubject.asObservable();

  constructor(private productoService: ProductoService) {}

  obtenerCategorias(): void {
    this.productoService.getCategoriaProducto().subscribe((data) => {
      this.listaCategoriasSubject.next(data);
    });
  }

  obtenerProveedores(): void {
    this.productoService.getProveedor().subscribe((data) => {
      this.listaProveedoresSubject.next(data);
    });
  }
}
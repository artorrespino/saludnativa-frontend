import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { CategoriaProducto, Producto,Proveedor } from 'src/app/modelos';
import { ProductoService, ProveedorService, CategoriaService } from 'src/app/servicio';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  productos?:Producto[];
  categoriaProducto: CategoriaProducto[] = [];
  proveedor: Proveedor[] = [];

  constructor(
    private productoService: ProductoService,
    private proveedorService: ProveedorService,
    private categoriaService: CategoriaService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerCategorias();
    this.obtenerProveedores();
    
  }
  obtenerProductos(): void {
    this.productoService.getProductos().pipe(
      catchError(error => {
        console.log('Error al obtener listado de productos:', error);
        return [];
      })
    ).subscribe(data => {
      this.productos = data;
    });
  }

  obtenerCategorias(): void {
    this.categoriaService.getCategorias().pipe(
      catchError(error => {
        console.log('Error al obtener categorías de productos:', error);
        return [];
      })
    ).subscribe(data => {
      this.categoriaProducto = data;
    });
  }

  obtenerProveedores(): void {
    this.proveedorService.getProveedores().pipe(
      catchError(error => {
        console.log('Error al obtener proveedores activos:', error);
        return [];
      })
    ).subscribe(data => {
      this.proveedor = data;
    });
  }

  getCategoriaProductoDescripcion(idCategoria:number):string{
    const categoriaProducto = this.categoriaProducto.find(tipo=> tipo.idCategoria === idCategoria);
    return categoriaProducto ? categoriaProducto.categoria: 'Desconocido';
  }

  getProveedorNombre(idProveedor:number):string{
    const proveedor = this.proveedor.find(tipo=> tipo.idProveedor === idProveedor );
    return proveedor ? proveedor.nombre: 'Desconocido';
  }

  nuevo(): void{
    this.router.navigate(['nuevoProducto']);
  }
  editar(producto:Producto):void{
    if (producto?.idProducto) {
      localStorage.setItem("id", producto.idProducto.toString());
      this.router.navigate(['editarProducto']);
    }
  }
  eliminar(producto: Producto): void {
    if (!producto) {
    return;
  }

  this.productoService.deleteProducto(producto).subscribe(
    () => {
      this.productos = this.productos!.filter(p => p.idProducto !== producto.idProducto);
    },
    error => {
      console.log(error);
    }
  );
  }


}

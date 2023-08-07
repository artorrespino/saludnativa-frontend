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
    this.proveedorService.getProveedoresActivos().pipe(
      catchError(error => {
        console.log('Error al obtener proveedores activos:', error);
        return [];
      })
    ).subscribe(data => {
      this.proveedor = data;
    });
  }

  getCategoriaProductoDescripcion(id_categoria_producto:number):string{
    const categoriaProducto = this.categoriaProducto.find(tipo=> tipo.id_categoria_producto === id_categoria_producto);
    return categoriaProducto ? categoriaProducto.categoria_producto: 'Desconocido';
  }

  getProveedorNombre(id_proveedor:number):string{
    const proveedor = this.proveedor.find(tipo=> tipo.id_proveedor === id_proveedor );
    return proveedor ? proveedor.nombre_proveedor: 'Desconocido';
  }

  nuevo(): void{
    this.router.navigate(['nuevoProducto']);
  }
  editar(producto:Producto):void{
    if (producto?.id_producto) {
      localStorage.setItem("id", producto.id_producto.toString());
      this.router.navigate(['editarProducto']);
    }
  }
  eliminar(producto: Producto): void {
    if (!producto) {
    return;
  }

  this.productoService.deleteProducto(producto).subscribe(
    () => {
      this.productos = this.productos!.filter(p => p.id_producto !== producto.id_producto);
    },
    error => {
      console.log(error);
    }
  );
  }


}

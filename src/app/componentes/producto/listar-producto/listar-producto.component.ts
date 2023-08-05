import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaProducto } from 'src/app/modelos/CategoriaProducto';
import { Producto } from 'src/app/modelos/Producto';
import { Proveedor } from 'src/app/modelos/Proveedor';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  productos?:Producto[];
  categoriaProducto: CategoriaProducto[] = [];
  proveedor: Proveedor[] = [];

  constructor(private productoService:ProductoService, private router: Router){}

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(
      data=>{
        this.productos=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
    this.productoService.getCategoriaProducto().subscribe(
      data => {
        this.categoriaProducto = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
    this.productoService.getProveedor().subscribe(
      data => {
        this.proveedor = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
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
    // localStorage.setItem("id",producto.id_producto.toString());
    // this.router.navigate(['editarProducto']);
  }
  eliminar(producto:Producto):void{
    this.productoService.deleteProducto(producto).subscribe(data=>{
      this.productos=this.productos!.filter(p=>p!==producto);
    });
  }


}

import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos';
import { CatalogoCarrito } from '../catalogoCarrito';
import { ProductoService } from 'src/app/servicio';
import { PedidoDetalle } from 'src/app/modelos/PedidoDetalle';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productos?:Producto[];

  constructor(
    private catalogoCarrito:CatalogoCarrito, 
    private productoService:ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos():void{
    
      this.productoService.getProductos().subscribe(
          data => {
            this.productos = data;
          },
          error => {
            console.log(error);
          }
      )
  }

  agregarAlCarrito(producto: Producto):void{
    
    const pedidoDetalleExistente = this.catalogoCarrito.items.find(detalle => detalle.idProducto === producto.idProducto); 

    if (pedidoDetalleExistente) {
      pedidoDetalleExistente.cantidad += 1;
      pedidoDetalleExistente.montoSubtotalProducto = pedidoDetalleExistente.cantidad * producto.precioUnitario;
    } else {
      const pedidoDetalle: PedidoDetalle = {
        cantidad: 1,
        montoSubtotalProducto: producto.precioUnitario,
        idProducto: producto.idProducto!,
        idPedido: 0,
        producto
      };
      this.catalogoCarrito.items.push(pedidoDetalle);
      
    }
    localStorage.setItem('carrito', JSON.stringify(this.catalogoCarrito.obtenerItems()))
    console.log(this.catalogoCarrito.obtenerItems())
  }

}

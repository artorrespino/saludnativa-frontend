import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos';
import { Cliente } from 'src/app/modelos/Cliente';
import { Pedido } from 'src/app/modelos/Pedido';
import { PedidoDetalle } from 'src/app/modelos/PedidoDetalle';
import { CatalogoCarrito } from '../catalogoCarrito';
import { CarritoService } from 'src/app/servicio/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {

  pedido:Pedido = new Pedido();
  carrito: PedidoDetalle[] = [];
  total:number=0;


  constructor(private catalogo:CatalogoCarrito, private carritoService:CarritoService, private router:Router ) {
   
    this.carrito = this.catalogo.obtenerItems();
    this.total = this.catalogo.calcularTotal();

   }

  ngOnInit(): void {
  }


  calcularTotal(): number {
    return this.carrito.reduce((total, detalle) => total + detalle.montoSubtotalProducto, 0);
  }

  
  eliminarItemCarrito(producto:Producto){
    const index=this.carrito.findIndex(value => value.idProducto===producto.idProducto);
    if(index>-1){
      this.carrito.splice(index,1);
    }

    this.total=this.calcularTotal();
    this.carrito = this.catalogo.obtenerItems();
  }

  actualizarCantidad(idProducto: number, nuevaCantidad: number): void {
    const detalle = this.carrito.find(item => item.idProducto === idProducto);
    if (detalle) {
      detalle.cantidad = nuevaCantidad;
      //detalle.importe = detalle.preciovta * nuevaCantidad;
      this.total=this.calcularTotal();
    }
  }


  registrarCompra(){
    //Simulamos al cliente 1
    this.pedido.cliente = new Cliente();  
    this.pedido.cliente.idCliente = 1; 

    //Obtener fecha actual y formatearla
    const fechaActual = new Date();
    const fechaFormateada = fechaActual.toISOString().slice(0, 10); // Formato "yyyy-MM-dd"

    //Completamos el pedido con la fecha y el pedidoDetalle 
    //this.pedido.fecPedido=fechaFormateada;
    this.pedido.pedidoDetalle=this.carrito;
      
    this.carritoService.createPedido(this.pedido).subscribe(
      data=>{
         console.log('OK registro');
         //Limpiamos carrito y regresamos al catálogo
         this.carrito=[];
         this.catalogo.limpiarItems();
         this.router.navigate(['catalogo']);
      }
    )
  }

}

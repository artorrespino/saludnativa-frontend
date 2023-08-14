import { Injectable } from "@angular/core";
import { PedidoDetalle } from "src/app/modelos/PedidoDetalle";

@Injectable({
    providedIn: 'root'
  })
  export class CatalogoCarrito {
    constructor(){}
    
    // @ts-ignore
    public items: PedidoDetalle[] = JSON.parse(localStorage.getItem("carrito")) || [];

    obtenerItems(): PedidoDetalle[] {
        return this.items;
    }

    limpiarItems():void{
        this.items=[];
    }

    calcularTotal():number{
        return this.items.reduce((total, items) => total + items.montoSubtotalProducto,0);
    }

  }
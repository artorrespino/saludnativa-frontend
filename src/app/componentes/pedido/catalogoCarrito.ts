import { Injectable } from "@angular/core";
import { PedidoDetalle } from "src/app/modelos/PedidoDetalle";

@Injectable({
    providedIn: 'root'
  })
  export class CatalogoCarrito {

    constructor(){}

    public items: PedidoDetalle[] = [];

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
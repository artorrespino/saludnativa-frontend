import { Producto } from "./Producto";

export class PedidoDetalle{
 
    cantidad: number;
    montoSubtotalProducto: number;
    idProducto: number;
    idPedido:number;
    producto:Producto;

    constructor(){
        this.cantidad=0;
        this.montoSubtotalProducto=0;
        this.idProducto=0;
        this.idPedido=0;
        this.producto=new Producto();
    }
}
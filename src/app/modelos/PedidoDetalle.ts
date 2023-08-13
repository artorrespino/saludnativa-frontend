
export class PedidoDetalle{
 
    cantidad: number;
    montoSubtotalProducto: number;
    idProducto: number;
    idPedido:number;

    constructor(){
        this.cantidad=0;
        this.montoSubtotalProducto=0;
        this.idProducto=0;
        this.idPedido=0;
    }
}
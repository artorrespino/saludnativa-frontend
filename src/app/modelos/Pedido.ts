import { Cliente } from "./Cliente";
import { PedidoDetalle } from "./PedidoDetalle";

export class Pedido{
    idPedido?: number;
    fecPedido: Date;
    montoSubtotal: number;
    montoTotal: number;
    cliente!: Cliente;
    pedidoDetalle!: PedidoDetalle[];
    
    constructor(){
        this.idPedido=0;
        this.fecPedido= new Date;
        this.montoSubtotal=0;
        this.montoTotal=0;

    }

}
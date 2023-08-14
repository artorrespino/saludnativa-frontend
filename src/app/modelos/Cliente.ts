import { TipoDocIdentidad } from "./TipoDocIdentidad";

export class Cliente{
    idCliente?: number;
    fecNacimiento: Date;
    numDocIdentidad: string;
    idUsuario: number;
    tipoDocIdentidad: TipoDocIdentidad;

    constructor(){
        this.idCliente=0;
        this.fecNacimiento = new Date();;
        this.numDocIdentidad="";
        this.idUsuario=0;
        this.tipoDocIdentidad = new TipoDocIdentidad();
    }
    
}

export class Proveedor{
    idProveedor?: number;
    ruc: string;
    nombre: string;
    contacto: string;
    email: string;
    celular: string;
    estado?: string;

    constructor(){
        this.idProveedor=0;
        this.ruc="";
        this.nombre="";
        this.contacto="";
        this.email="";
        this.celular="";
        this.estado="";
    }
}
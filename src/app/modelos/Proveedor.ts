import {Estado} from './Estado';

export class Proveedor{
    id_proveedor: number;
    nombre_proveedor: string;
    contacto_proveedor: string;
    email_proveedor: string;
    celular_proveedor: string;
    estado: Estado;

    constructor(){
        this.id_proveedor=0;
        this.nombre_proveedor="";
        this.contacto_proveedor="";
        this.email_proveedor="";
        this.celular_proveedor="";
        this.estado=new Estado();
    }
}
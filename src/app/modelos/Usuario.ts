import {Rol} from './Rol';

export class Usuario{
    idUsuario?:number;
    nombres:string;
    apPaterno:string;
    apMaterno:string;
    celular:string;
    email:string;
    contrasenia:string;
    intentosLogin:number;
    estado?: string;
    rol: Rol;
    

    constructor(){
        this.idUsuario=0;
        this.nombres="";
        this.apPaterno="";
        this.apMaterno="";
        this.celular="";
        this.email="";
        this.contrasenia="";
        this.intentosLogin=0;
        this.estado = "";
        this.rol= new Rol();

    }
}
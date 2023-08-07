import {Estado} from './Estado';
import {Rol} from './Rol';

export class Usuario{
    id_usuario?:number;
    nombres:string;
    ap_paterno:string;
    ap_materno:string;
    celular:string;
    email:string;
    contrasenia:string;
    intentos_login:number;
    rol: Rol;
    estado: Estado;

    constructor(){
        this.id_usuario=0;
        this.nombres="";
        this.ap_paterno="";
        this.ap_materno="";
        this.celular="";
        this.email="";
        this.contrasenia="";
        this.intentos_login=0;
        this.rol= new Rol();
        this.estado= new Estado();

    }
}
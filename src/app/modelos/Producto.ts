import {CategoriaProducto} from './CategoriaProducto';
import {Proveedor} from './Proveedor';
export class Producto{

    idProducto?: number;
    nombre: string;
    imagen: string;
    descripcion: string;
    precioUnitario: number;
    stock: number;
    categoriaProducto: CategoriaProducto;
    proveedor: Proveedor;

    constructor(){
        this.idProducto = 0;
        this.nombre = "";
        this.imagen = "";
        this.descripcion = "";
        this.precioUnitario = 0;
        this.stock = 0;
        this.categoriaProducto = new CategoriaProducto();
        this.proveedor = new Proveedor();
    }
  
  }
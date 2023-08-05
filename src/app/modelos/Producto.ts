import {CategoriaProducto} from './CategoriaProducto';
import {Proveedor} from './Proveedor';
export class Producto{

    id_producto?: number;
    nombre_producto: string;
    imagen_producto: string;
    descripcion_producto: string;
    precio_unitario_producto: number;
    stock_producto: number;
    categoriaProducto: CategoriaProducto;
    proveedor: Proveedor;

    constructor(){
        this.id_producto = 0;
        this.nombre_producto = "";
        this.imagen_producto = "";
        this.descripcion_producto = "";
        this.precio_unitario_producto = 0;
        this.stock_producto = 0;
        this.categoriaProducto = new CategoriaProducto();
        this.proveedor = new Proveedor();

    }
  
  }
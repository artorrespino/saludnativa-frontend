import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaProducto } from 'src/app/modelos/CategoriaProducto';
import { Producto } from 'src/app/modelos/Producto';
import { Proveedor } from 'src/app/modelos/Proveedor';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {

  modelProducto = new Producto();
  
  listaCategorias: CategoriaProducto[] = []; // Lista de categorías
  listaProveedores: Proveedor[] = []; // Lista de proveedores
  selectedImage: string | ArrayBuffer | null = null;

  constructor(private router:Router, private productoService: ProductoService ) { }

  ngOnInit(): void {
    this.obtenerCategorias();
    this.obtenerProveedores();
  }

  obtenerCategorias(): void {
    this.productoService.getCategoriaProducto().subscribe(data => {
      this.listaCategorias = data;
    });
  }

  obtenerProveedores(): void {
    this.productoService.getProveedor().subscribe(data => {
      this.listaProveedores = data;
    });
  }

  guardar(producto: Producto){
    //producto.categoriaProducto = producto.categoriaProducto.id_categoria_producto; 
    //producto.proveedor = producto.proveedor.id_proveedor;

    const {id_producto, /* proveedor, categoriaProducto, */ ...productoSinID} = producto;

    // const newProducto = {
    //   ...productoSinID,
    //   proveedor
    // }

    console.log(productoSinID)
    this.productoService.createProducto(productoSinID).subscribe(data=>{

      this.router.navigate(['productos']);
    });
  }
  
  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.selectedImage = reader.result;
        this.modelProducto.imagen_producto = this.selectedImage?.toString() || '';
      };
    }
  }
  

}

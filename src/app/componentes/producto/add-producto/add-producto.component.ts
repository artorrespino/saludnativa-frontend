import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaProducto, Producto, Proveedor } from 'src/app/modelos';
import { ProductoService } from 'src/app/servicio';
import { ListadoService } from 'src/app/servicio/listados.service';

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

  constructor(
    private router:Router, 
    private productoService: ProductoService,
    private listadosService: ListadoService
    ) { }

  ngOnInit(): void {
    this.listadosService.listaCategorias$.subscribe((categorias) => {
      this.listaCategorias = categorias;
    });

    this.listadosService.listaProveedores$.subscribe((proveedores) => {
      this.listaProveedores = proveedores;
    });

    this.listadosService.obtenerCategorias();
    this.listadosService.obtenerProveedores();
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

    const { id_producto, ...productoSinID } = producto;
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

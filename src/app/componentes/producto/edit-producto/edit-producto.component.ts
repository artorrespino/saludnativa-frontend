import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaProducto, Producto, Proveedor } from 'src/app/modelos';
import { ProductoService } from 'src/app/servicio';
import { ListadoService } from 'src/app/servicio/listados.service';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

  producto: Producto= new Producto();
  listaCategorias: CategoriaProducto[] = [];
  listaProveedores: Proveedor[] = [];
  selectedImage: string | ArrayBuffer | null = null;

  constructor(
    private router:Router, 
    private productoService:ProductoService,
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

    this.editar();
  }

  editar(){
    let id = JSON.parse(localStorage.getItem('id') as string);
    this.productoService.getProductoId(id).subscribe(data=>{
      this.producto=data;
    });
  }

  actualizar(producto:Producto){
    this.productoService.updateProducto(producto).subscribe(data=>{
      this.producto=data;
      this.router.navigate(['productos']);
    })
  }

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.selectedImage = reader.result;
        this.producto.imagen_producto = this.selectedImage?.toString() || '';
      };
    }
  }

}

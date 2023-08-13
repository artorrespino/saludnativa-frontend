import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaProducto, Producto, Proveedor } from 'src/app/modelos';
import { ProductoService, ProveedorService } from 'src/app/servicio';
import { CategoriaService } from 'src/app/servicio/categoria.service';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

  producto: Producto= new Producto();

  listaCategorias: CategoriaProducto[] = []; // Lista de categorías
  listaProveedores: Proveedor[] = []; // Lista de proveedores
  selectedImage: string | ArrayBuffer | null = null;

  constructor(
    private router:Router, 
    private productoService:ProductoService,
    private categoriaService: CategoriaService,
    private proveedorService: ProveedorService
    ) { }

  ngOnInit(): void {
    this.obtenerCategorias();
    this.obtenerProveedores();
    this.editar();
  }

  obtenerCategorias(): void {
    this.categoriaService.getCategorias().subscribe(data => {
      this.listaCategorias = data;
    });
  }

  obtenerProveedores(): void {
    this.proveedorService.getProveedores().subscribe(data => {
      this.listaProveedores = data;
    });
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
        this.producto.imagen = this.selectedImage?.toString() || '';
      };
    }
  }

}

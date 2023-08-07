import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaProducto, Producto, Proveedor } from 'src/app/modelos';
import { ProductoService, ProveedorService } from 'src/app/servicio';
import { CategoriaService } from 'src/app/servicio/categoria.service';

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
    private router: Router, 
    private productoService: ProductoService,
    private categoriaService: CategoriaService,
    private proveedorService: ProveedorService
    ) { }

  ngOnInit(): void {
    this.obtenerCategorias();
    this.obtenerProveedores();
  }

  obtenerCategorias(): void {
    this.categoriaService.getCategorias().subscribe(data => {
      this.listaCategorias = data;
    });
  }

  obtenerProveedores(): void {
    this.proveedorService.getProveedoresActivos().subscribe(data => {
      this.listaProveedores = data;
    });
  }

  guardar(producto: Producto){
    const { id_producto, ...productoSinID } = producto;
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

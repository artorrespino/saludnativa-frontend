import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Proveedor } from 'src/app/modelos';
import { ProveedorService } from 'src/app/servicio';

@Component({
  selector: 'app-listar-proveedor',
  templateUrl: './listar-proveedor.component.html',
  styleUrls: ['./listar-proveedor.component.css']
})
export class ListarProveedorComponent implements OnInit {

  proveedores?: Proveedor[];

  constructor(
    private proveedorService:ProveedorService,
    private router: Router){}

  ngOnInit(): void {
    this.obtenerProveedores();
  }

  obtenerProveedores(): void {
    this.proveedorService.getProveedores().pipe(
      catchError(error => {
        console.log('Error al obtener proveedores activos:', error);
        return [];
      })
    ).subscribe(data => {
      this.proveedores = [...data].filter(provedor => provedor.estado === 'Activo');
    });
  }


  nuevo(): void{
    this.router.navigate(['nuevoProveedor']);
  }
  editar(proveedor:Proveedor):void{
    if (proveedor && proveedor.idProveedor) {
      localStorage.setItem("id", proveedor.idProveedor.toString());
      this.router.navigate(['editarProveedor']);
    }
  }
  eliminar(proveedor: Proveedor): void {
    if (!proveedor) {
      return;
    }
    this.proveedorService.deleteProveedor(proveedor).subscribe(
      () => {
        this.proveedores = this.proveedores!.filter((p)=> p.idProveedor !== proveedor.idProveedor);
      },
      error => {
        console.log(error)
      }
    );
  }

}

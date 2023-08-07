import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Estado, Proveedor, Rol } from 'src/app/modelos';
import { ProveedorService,EstadoService,RolService } from 'src/app/servicio';

@Component({
  selector: 'app-listar-proveedor',
  templateUrl: './listar-proveedor.component.html',
  styleUrls: ['./listar-proveedor.component.css']
})
export class ListarProveedorComponent implements OnInit {

  proveedores?: Proveedor[];
  estados: Estado[] = [];
  roles: Rol[] = [];

  constructor(
    private proveedorService:ProveedorService,
    private estadoService: EstadoService,
    private rolService: RolService,
    private router: Router){}

  ngOnInit(): void {
    this.obtenerProveedores();
    this.obtenerRoles();
    this.obtenerEstados();
  }

  obtenerProveedores(): void {
    this.proveedorService.getProveedoresActivos().pipe(
      catchError(error => {
        console.log('Error al obtener proveedores activos:', error);
        return [];
      })
    ).subscribe(data => {
      this.proveedores = data;
    });
  }

  obtenerRoles(): void {
    this.rolService.getRoles().pipe(
      catchError(error => {
        console.log('Error al obtener roles:', error);
        return [];
      })
    ).subscribe(data => {
      this.roles = data;
    });
  }

  obtenerEstados(): void {
    this.estadoService.getEstados().pipe(
      catchError(error => {
        console.log('Error al obtener estados:', error);
        return [];
      })
    ).subscribe(data => {
      this.estados = data;
    });
  }

  getEstadoNombre(id_estado:number):string{
    const estado = this.estados.find(tipo=> tipo.id_estado === id_estado );
    return estado ? estado.estado: 'Desconocido';
  }

  nuevo(): void{
    this.router.navigate(['nuevoProveedor']);
  }
  editar(proveedor:Proveedor):void{
    if (proveedor && proveedor.id_proveedor) {
      localStorage.setItem("id", proveedor.id_proveedor.toString());
      this.router.navigate(['editarProveedor']);
    }
  }
  eliminar(proveedor: Proveedor): void {
    this.proveedorService.deleteProveedor(proveedor).subscribe(
      data => {
        console.log(data.id_proveedor)
        this.proveedores = this.proveedores!.filter((p)=> p.id_proveedor !== proveedor.id_proveedor);
      },
      error => {
        console.log(error)
      }
    );
  }

}

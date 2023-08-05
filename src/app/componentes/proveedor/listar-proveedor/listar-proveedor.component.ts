import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estado, Proveedor } from 'src/app/modelos';
import { ProveedorService } from 'src/app/servicio/proveedor.service';

@Component({
  selector: 'app-listar-proveedor',
  templateUrl: './listar-proveedor.component.html',
  styleUrls: ['./listar-proveedor.component.css']
})
export class ListarProveedorComponent implements OnInit {

  proveedores?: Proveedor[];
  estados: Estado[] = [];

  constructor(private proveedorService:ProveedorService,private router: Router){}

  ngOnInit(): void {
    this.proveedorService.getProveedor().subscribe(
      data=>{
        this.proveedores=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
    this.proveedorService.getEstado().subscribe(
      data => {
        this.estados = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estado, Proveedor, Rol } from 'src/app/modelos';
import { ProveedorService, RolService, EstadoService } from 'src/app/servicio';

@Component({
  selector: 'app-add-proveedor',
  templateUrl: './add-proveedor.component.html',
  styleUrls: ['./add-proveedor.component.css']
})
export class AddProveedorComponent implements OnInit {

  modelProveedor = new Proveedor();

  listaEstados: Estado[] = [];
  listaRoles: Rol [] = [];

  constructor(
    private router: Router,
    private proveedorService: ProveedorService,
    private rolService: RolService,
    private estadoService: EstadoService
  ) { }

  ngOnInit(): void {
    this.obtenerEstados();
    this.obtenerRoles();
  }

  obtenerEstados(): void {
    this.estadoService.getEstados().subscribe(data => {
      this.listaEstados = data;
    })
  }

  obtenerRoles(): void {
    this.rolService.getRoles().subscribe(data => {
      this.listaRoles = data;
    })
  }

  guardar(proveedor: Proveedor){

    const { id_proveedor, ...proveedorSinID} = proveedor;
    console.log(proveedorSinID)
    this.proveedorService.createProveedor(proveedorSinID).subscribe(data=>{
      this.router.navigate(['proveedores']);
    });
  }

}

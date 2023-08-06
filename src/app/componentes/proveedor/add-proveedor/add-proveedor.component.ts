import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estado, Proveedor } from 'src/app/modelos';
import { ProveedorService } from 'src/app/servicio/proveedor.service';

@Component({
  selector: 'app-add-proveedor',
  templateUrl: './add-proveedor.component.html',
  styleUrls: ['./add-proveedor.component.css']
})
export class AddProveedorComponent implements OnInit {

  modelProveedor = new Proveedor();

  listaEstados: Estado[] = [];

  constructor(
    private router: Router,
    private proveedorService: ProveedorService

  ) { }

  ngOnInit(): void {
    this.obtenerEstados();
  }

  obtenerEstados():void{
    this.proveedorService.getEstado().subscribe(data => {
      this.listaEstados = data;
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

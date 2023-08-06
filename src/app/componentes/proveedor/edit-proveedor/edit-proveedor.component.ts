import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estado, Proveedor } from 'src/app/modelos';
import { ProveedorService } from 'src/app/servicio/proveedor.service';

@Component({
  selector: 'app-edit-proveedor',
  templateUrl: './edit-proveedor.component.html',
  styleUrls: ['./edit-proveedor.component.css']
})
export class EditProveedorComponent implements OnInit {

  proveedor: Proveedor = new Proveedor();
  listaEstado: Estado[] = [];

  constructor(
    private router:Router, 
    private proveedorService:ProveedorService
  ) { }

  ngOnInit(): void {
    this.editar();
  
  }

  editar(){
    let id = JSON.parse(localStorage.getItem('id') as string);
    this.proveedorService.getProveedorId(id).subscribe(data=>{
      this.proveedor=data;
    });
  }

  actualizar(proveedor:Proveedor){
    this.proveedorService.updateProveedor(proveedor).subscribe(data=>{
      this.proveedor=data;
      this.router.navigate(['proveedores']);
    })
  }

}

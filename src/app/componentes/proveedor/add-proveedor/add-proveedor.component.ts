import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor} from 'src/app/modelos';
import { ProveedorService } from 'src/app/servicio';

@Component({
  selector: 'app-add-proveedor',
  templateUrl: './add-proveedor.component.html',
  styleUrls: ['./add-proveedor.component.css']
})
export class AddProveedorComponent implements OnInit {

  modelProveedor = new Proveedor();

  constructor(
    private router: Router,
    private proveedorService: ProveedorService
  ) { }

  ngOnInit(): void {
  }

  guardar(proveedor: Proveedor){

    const { idProveedor,estado, ...proveedorSinID} = proveedor;
    console.log(proveedorSinID)
    this.proveedorService.createProveedor(proveedorSinID).subscribe(data=>{
      this.router.navigate(['proveedores']);
    });
  }

}

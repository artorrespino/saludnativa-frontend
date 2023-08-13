import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario,Rol } from 'src/app/modelos';
import { UsuarioService, RolService } from 'src/app/servicio';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  
  listaRoles: Rol [] = [];

  constructor(
    private router:Router, 
    private usuarioService:UsuarioService,
    private rolService: RolService
  ) { }

  ngOnInit(): void {
    this.editar();
    this.obtenerRoles();
  
  }

  obtenerRoles(): void {
    this.rolService.getRoles().subscribe(data => {
      this.listaRoles = data;
    })
  }

  editar(){
    let id = JSON.parse(localStorage.getItem('id') as string);
    this.usuarioService.getUsuarioId(id).subscribe(data=>{
      this.usuario=data;
    });
  }

  actualizar(usuario:Usuario){
    this.usuarioService.updateUsuario(usuario).subscribe(data=>{
      this.usuario=data;
      this.router.navigate(['usuarios']);
    })
  }

}

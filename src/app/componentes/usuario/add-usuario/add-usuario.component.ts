import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario,Rol } from 'src/app/modelos';
import { UsuarioService, RolService } from 'src/app/servicio';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  modelUsuario = new Usuario();

  listaRoles: Rol [] = [];

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private rolService: RolService

  ) { }

  ngOnInit(): void {
    this.obtenerRoles();
  }


  obtenerRoles(): void {
    this.rolService.getRoles().subscribe(data => {
      this.listaRoles = data;
    })
  }

  guardar(usuario: Usuario){

    const { idUsuario,estado, ...usuarioSinID} = usuario;
    console.log(usuarioSinID)
    this.usuarioService.createUsuario(usuarioSinID).subscribe(data=>{
      this.router.navigate(['usuarios']);
    });
  }

}

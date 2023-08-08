import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario,Estado,Rol } from 'src/app/modelos';
import { UsuarioService, RolService, EstadoService } from 'src/app/servicio';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  modelUsuario = new Usuario();

  listaEstados: Estado[] = [];
  listaRoles: Rol [] = [];

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
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

  guardar(usuario: Usuario){

    const { id_usuario, ...usuarioSinID} = usuario;
    console.log(usuarioSinID)
    this.usuarioService.createUsuario(usuarioSinID).subscribe(data=>{
      this.router.navigate(['usuarios']);
    });
  }

}

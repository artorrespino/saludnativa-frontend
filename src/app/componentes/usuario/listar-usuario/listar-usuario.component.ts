import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Estado, Usuario, Rol } from 'src/app/modelos';
import { UsuarioService,EstadoService,RolService } from 'src/app/servicio';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  usuarios?: Usuario[];
  estados: Estado[] = [];
  roles: Rol[] = [];

  constructor(
    private usuarioService:UsuarioService,
    private estadoService: EstadoService,
    private rolService: RolService,
    private router: Router){}

  ngOnInit(): void {
    this.obtenerUsuarios();
    this.obtenerRoles();
    this.obtenerEstados();
  }

  obtenerUsuarios(): void {
    this.usuarioService.getUsuariosActivos().pipe(
      catchError(error => {
        console.log('Error al obtener usuarios activos:', error);
        return [];
      })
    ).subscribe(data => {
      this.usuarios = data;
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

  getRolNombre(id_rol:number):string{
    const rol = this.roles.find(tipo=> tipo.id_rol === id_rol );
    return rol ? rol.rol: 'Desconocido';
  }

  getEstadoNombre(id_estado:number):string{
    const estado = this.estados.find(tipo=> tipo.id_estado === id_estado );
    return estado ? estado.estado: 'Desconocido';
  }

  nuevo(): void{
    this.router.navigate(['nuevoUsuario']);
  }
  editar(usuario:Usuario):void{
    if (usuario?.id_usuario) {
      localStorage.setItem("id", usuario.id_usuario.toString());
      this.router.navigate(['editarUsuario']);
    }
  }
  eliminar(usuario: Usuario): void {
    if (!usuario) {
      return;
    }
    this.usuarioService.deleteUsuario(usuario).subscribe(
      () => {
        this.usuarios = this.usuarios!.filter((p)=> p.id_usuario !== usuario.id_usuario);
      },
      error => {
        console.log(error)
      }
    );
  }

}

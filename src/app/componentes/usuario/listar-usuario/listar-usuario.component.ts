import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Usuario, Rol } from 'src/app/modelos';
import { UsuarioService,RolService } from 'src/app/servicio';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  usuarios?: Usuario[];
  roles: Rol[] = [];

  constructor(
    private usuarioService:UsuarioService,
    private rolService: RolService,
    private router: Router){}

  ngOnInit(): void {
    this.obtenerUsuarios();
    this.obtenerRoles();
  }

  obtenerUsuarios(): void {
    this.usuarioService.getUsuarios().pipe(
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

  getRolNombre(idRol:number):string{
    const rol = this.roles.find(tipo=> tipo.idRol === idRol );
    return rol ? rol.rol: 'Desconocido';
  }

  nuevo(): void{
    this.router.navigate(['nuevoUsuario']);
  }
  editar(usuario:Usuario):void{
    if (usuario?.idUsuario) {
      localStorage.setItem("id", usuario.idUsuario.toString());
      this.router.navigate(['editarUsuario']);
    }
  }
  eliminar(usuario: Usuario): void {
    if (!usuario) {
      return;
    }
    this.usuarioService.deleteUsuario(usuario).subscribe(
      () => {
        this.usuarios = this.usuarios!.filter((p)=> p.idUsuario !== usuario.idUsuario);
      },
      error => {
        console.log(error)
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicio/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  //usuarios?: Usuario[];
  //estados: Estado[] = [];
  //roles: Rol[] = [];

  constructor(private usuarioService:UsuarioService,private router: Router) { }

  ngOnInit(): void {
  }

}

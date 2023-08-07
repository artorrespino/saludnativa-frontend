import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarProductoComponent } from './componentes/producto/listar-producto/listar-producto.component';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AddProductoComponent } from './componentes/producto/add-producto/add-producto.component';
import { EditProductoComponent } from './componentes/producto/edit-producto/edit-producto.component';
import { ListarProveedorComponent } from './componentes/proveedor/listar-proveedor/listar-proveedor.component';
import { AddProveedorComponent } from './componentes/proveedor/add-proveedor/add-proveedor.component';
import { EditProveedorComponent } from './componentes/proveedor/edit-proveedor/edit-proveedor.component';
import { ListarUsuarioComponent } from './componentes/usuario/listar-usuario/listar-usuario.component';
import { ListarClienteComponent } from './componentes/cliente/listar-cliente/listar-cliente.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarProductoComponent,
    AddProductoComponent,
    EditProductoComponent,
    ListarProveedorComponent,
    AddProveedorComponent,
    EditProveedorComponent,
    ListarUsuarioComponent,
    ListarClienteComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

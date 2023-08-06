import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductoComponent } from './componentes/producto/listar-producto/listar-producto.component';
import { AddProductoComponent } from './componentes/producto/add-producto/add-producto.component';
import { EditProductoComponent } from './componentes/producto/edit-producto/edit-producto.component';
import { ListarProveedorComponent } from './componentes/proveedor/listar-proveedor/listar-proveedor.component';
import { AddProveedorComponent } from './componentes/proveedor/add-proveedor/add-proveedor.component';
import { EditProveedorComponent } from './componentes/proveedor/edit-proveedor/edit-proveedor.component';

const routes: Routes = [
  {path: 'productos', component:ListarProductoComponent},
  {path:'nuevoProducto', component:AddProductoComponent},
  {path:'editarProducto', component:EditProductoComponent},
  {path: 'proveedores', component: ListarProveedorComponent},
  {path:'nuevoProveedor', component:AddProveedorComponent},
  {path:'editarProveedor', component:EditProveedorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

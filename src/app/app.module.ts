import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarProductoComponent } from './componentes/producto/listar-producto/listar-producto.component';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AddProductoComponent } from './componentes/producto/add-producto/add-producto.component';
import { EditProductoComponent } from './componentes/producto/edit-producto/edit-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarProductoComponent,
    AddProductoComponent,
    EditProductoComponent
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

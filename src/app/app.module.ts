import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ProveedoresService} from "./servicios/proveedores.service";
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import {RouterModule, Routes} from "@angular/router";
import { HeaderComponent } from './header/header.component';

const routes: RouterModule = [
  { path: '', component: InicioComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: '**', component: InicioComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(<Routes>routes)
  ],
  providers: [ProveedoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }

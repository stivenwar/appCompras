import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ProveedoresService} from "./servicios/proveedores.service";
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import {RouterModule, Routes} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import {HttpClientModule} from "@angular/common/http";
import {PresupuestosService} from "./servicios/presupuestos.service";
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import {AutenticacionService} from "./servicios/autenticacion.service";

const routes: RouterModule = [
  { path: '', component: InicioComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  {path: 'addprovee', component: AddproveeComponent},
  {path: 'addpres', component: AddpresComponent},
  { path: 'presupuestos', component: PresupuestosComponent },
  { path: 'editpres/:id', component: EditpresComponent },
  { path: '**', component: InicioComponent}
]
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(<Routes>routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpresComponent,
    PresupuestosComponent,
    EditpresComponent,
    RegistroComponent
  ],

  providers: [ProveedoresService,PresupuestosService,AutenticacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

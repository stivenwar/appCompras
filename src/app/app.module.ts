import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ProveedoresService} from "./servicios/proveedores.service";
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import {RouterModule, Routes} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import {FormsModule} from "@angular/forms";

const routes: RouterModule = [
  { path: '', component: InicioComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  {path: 'addprovee', component: AddproveeComponent},
  { path: '**', component: InicioComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(<Routes>routes),
    FormsModule
  ],
  providers: [ProveedoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }

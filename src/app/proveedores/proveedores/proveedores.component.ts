import { Component, OnInit } from '@angular/core';
import {ProveedoresService} from "../../servicios/proveedores.service";

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit {

  mensaje:string = '';
  proveedores: any;
  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit(): void {
    this.proveedores = this.proveedoresService.getProveedores();
  }

}

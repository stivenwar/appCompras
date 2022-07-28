import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {PresupuestosService} from "../../servicios/presupuestos.service";
@Component({
  selector: 'app-addpres',
  templateUrl: './addpres.component.html',
  styleUrls: ['./addpres.component.scss']
})
export class AddpresComponent implements OnInit {

  presupuestoForm!: FormGroup;
  presupuesto: any;
  base: any;
  tipo: any;
  iva: any = 0;
  total: any = 0;
  constructor(private pf:FormBuilder, private presupuestosService:PresupuestosService) {

  }

  ngOnInit(): void {
    this.presupuestoForm = this.pf.group({
      proveedor: ['', Validators.required ],
      fecha: ['', Validators.required ],
      concepto: ['', [ Validators.required, Validators.minLength(10)] ],
      base: ['', Validators.required ],
      tipo: ['', Validators.required ],
      iva: this.iva ,
      total: this.total
  });
    this.onChanges();
  }

  onChanges(): void {
    this.presupuestoForm.valueChanges.subscribe(valor => {
    this.base = valor.base;
    this.tipo = valor.tipo;
    this.presupuestoForm.value.iva = this.base * this.tipo;
      this.presupuestoForm.value.total = this.base + (this.base * this.tipo);
    });
  }
  onSubmit() {
    this.presupuesto = this.savePresupuesto();
    this.presupuestosService.postPresupuesto(this.presupuesto);
  }
  savePresupuesto(){
    const savePresupuesto = {
      proveedor: this.presupuestoForm.get('proveedor')?.value,
      fecha: this. presupuestoForm.get('fecha')?.value,
      concepto: this.presupuestoForm.get('concepto')?.value,
      base: this.presupuestoForm.get('base')?.value,
      tipo: this.presupuestoForm.get('tipo')?.value,
      iva: this.presupuestoForm.get('iva')?.value,
      total: this.presupuestoForm.get('total')?.value
    };
    return savePresupuesto;
  }
}

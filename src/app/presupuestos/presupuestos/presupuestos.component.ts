import { Component, OnInit } from '@angular/core';
import {PresupuestosService} from "../../servicios/presupuestos.service";

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.scss']
})

export class PresupuestosComponent implements OnInit {

  presupuestos:any[]= [];
  id: any = '';
  constructor(private presupuestosService: PresupuestosService) {

    this.presupuestosService.getPresupuestos()
      .subscribe(presupuestos => {
        for ( const id$ in presupuestos) {

          const p = (<any>presupuestos)[id$];
          p.id$ = id$;
          this.presupuestos.push((<any>presupuestos)[id$]);
        }
        console.log(this.presupuestos);
      })
  }

  ngOnInit(): void {
  }

  eliminarPresupuesto(id$: any) {
    this.presupuestosService.delPresupuesto(id$).subscribe(res => {
      console.log(res)
      this.presupuestos = [];
      this.presupuestosService.getPresupuestos()
        .subscribe(presupuestos => {
          for (const id$ in presupuestos) {
            const p = (<any>presupuestos)[id$];
            p.id$ = id$;
            this.presupuestos.push((<any>presupuestos)[id$]);
          }
          console.log(this.presupuestos);

        })
    });

  }
}

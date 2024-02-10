import { Component, OnInit } from '@angular/core';
import { Gasto } from '../interface/gasto';
import { PresupuestoService } from '../service/presupuesto.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.page.html',
})
export class PresupuestoPage implements OnInit {
  public tiposDeGastos: string[] = ['Directos', 'Fijos', 'Variables'];
  public tipoDeGasto: any;
  public monto: number = 0;
  public resultados: string = '';
  public colorResultados: string = 'light';
  public gastosList: Gasto[] = [];

  constructor(private presupuestoService: PresupuestoService) { }

  ngOnInit() {
    this.gastosList = this.presupuestoService.mostrarGastos();
  }

  customPopoverOptions: any = {
    header: 'Selección de gastos',
    subHeader: 'Seleccione el tipo de gasto',
    message: 'Solo seleccione un tipo de gasto',
  };

  cambioValor(value: any) {
    console.log(value);
  }

  guardar() {
    this.resultados = "";

    if (this.monto != null && this.tipoDeGasto != null && this.monto > 0)
    {
      this.colorResultados = "success";
      this.resultados = "Tipo de gasto seleccionado: " + this.tipoDeGasto + "\nMonto ingresado: " + this.monto + "\n";
      this.presupuestoService.agregarGasto(this.monto, this.tipoDeGasto);
    }
    else
    {
      this.colorResultados = "danger";
      this.resultados = "Hay campos sin llenar. Llene todos los campos."
    }
  }

  limpiarCampos() {
    this.monto = 0;
    this.tipoDeGasto = null;
  }
}

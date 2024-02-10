import { Injectable } from '@angular/core';
import { Gasto } from '../interface/gasto';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  gastos: Gasto[] = [];

  constructor() { }


  public agregarGasto(monto: number, tipoDeGasto: string){
    this.gastos.push({monto, tipoDeGasto});
  }

  public mostrarGastos() {
    return this.gastos;
  }
}

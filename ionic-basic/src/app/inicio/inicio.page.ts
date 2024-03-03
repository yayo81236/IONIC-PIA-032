import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from '../interface/personaje';
import { EnvioReceptorService } from '../service/envio-receptor.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html'
})
export class InicioPage implements OnInit {

  user: Personaje = {name:'Gerardo Enrique', matricula:"2064063", email:"gerardotorres@gmail.com"};

  list: Personaje[]=
  [
    {name:'Gerardo Enrique', matricula:"2064063", email:"gerardotorres@gmail.com"},
    {name:'Valeria Gamero', matricula:"2062934", email:"valeriaflores@gmail.com"},
    {name:'Eber Cervantes', matricula:"2084724", email:"eberpro90@gmail.com"}
  ];

  constructor(
    private router: Router,
    private envioReceptor: EnvioReceptorService
    ) { }

  ngOnInit() {
  }

  redireccionReceptor(){
    this.envioReceptor.sendObjectSource(this.user);
    this.envioReceptor.sendListSource(this.list);

    this.router.navigate(['/receptor']);
  }

}
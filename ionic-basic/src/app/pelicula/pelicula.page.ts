import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../interface/pelicula';
import { PeliculaService } from '../service/pelicula.service';
import { MenuService } from '../service/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.page.html',
  styleUrls: ['./pelicula.page.scss'],
})
export class PeliculaPage implements OnInit {

  public peliculas: Pelicula[] = [];
  public peliculaService: PeliculaService

  constructor(peliculaService: PeliculaService,
    private menuService: MenuService,
    private router: Router
    ) { 
    this.peliculaService = peliculaService;
  }

  ngOnInit() {
    this.peliculas = this.peliculaService.getPeliculas();
  }

  irDetallePelicula(id: number){
    this.menuService.setTitle("detalle-pelicula");
    this.router.navigate(['/detalle-pelicula'], 
    { queryParams: { id: id } });
    this.router.navigate(['/main/detalle-pelicula/'+id])

  }


}
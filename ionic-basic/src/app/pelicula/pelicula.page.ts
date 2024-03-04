import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../interface/pelicula';
import { PeliculaService } from '../service/pelicula.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.page.html',
  styleUrls: ['./pelicula.page.scss'],
})
export class PeliculaPage implements OnInit {

  public peliculas: Pelicula[] = [];
  public peliculaService: PeliculaService

  constructor(peliculaService: PeliculaService) { 
    this.peliculaService = peliculaService;
  }

  ngOnInit() {
    this.peliculas = this.peliculaService.getPeliculas();
  }

}
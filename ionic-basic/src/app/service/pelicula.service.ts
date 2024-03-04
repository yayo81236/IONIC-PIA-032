import { Injectable } from '@angular/core';
import { Pelicula } from '../interface/pelicula';


@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  peliculas: Pelicula[]=[
    {
      id: 1, 
      nombre: 'Titanic', 
      image: 'https://i.pinimg.com/564x/42/42/65/4242658e6f1b0d6322a4a93e0383108b.jpg',
      tramas: ["Una anciana llamada Rose DeWitt Bukater cuenta la historia de su vida en el momento en el que ella subió al barco y conoció al amor de su vida, Jack Dawson,un noble y pobre joven con grandes sueños pero la familia de Rose lo miro como un algo poco interesante, antes de que el barco chocara con el iceberg y se hundiera."]
    },
    {
      id: 2, 
      nombre: 'Eterno resplandor de una mente sin recuerdos', 
      image: 'https://www.informapeliculas.com/images/posts/8d1938681a8765daaf4292897a1765f2-0.jpg',
      tramas: ['Parecían la pareja ideal, su primer encuentro fue mágico pero con el paso del tiempo ella deseó nunca haberlo conocido. Su anhelo se hace realidad gracias a un polémico y radical invento. Sin embargo descubrirán que el destino no se puede controlar.']
    },
    {
      id: 3, 
      nombre: 'The Truman Show: historia de una vida', 
      image: 'https://moviepostermexico.com/cdn/shop/products/truman_show_ver2_xxlg_1024x1024@2x.jpg?v=1615137999',
      tramas: [
        'Truman Burbank, un feliz agente de seguros, cree llevar una vida normal, pero no tiene idea de que las cámaras lo graban las 24 horas y que todo lo que hace se ve en televisión.'
      ]
    },
    {
      id: 4, 
      nombre: 'Forrest Gump', 
      image: 'https://www.originalfilmart.com/cdn/shop/files/forrest_gump_1991_original_film_art_5000x.webp?v=1700679183',
      tramas: [
        'Sentado en un banco en Savannah, Georgia, Forrest Gump espera al autobús. Mientras éste tarda en llegar, el joven cuenta su vida a las personas que se sientan a esperar con él. Aunque sufre un pequeño retraso mental, esto no le impide hacer cosas maravillosas. Sin entender del todo lo que sucede a su alrededor, Forrest toma partido en los eventos más importantes de la historia de los Estados Unidos.'

      ]
    }
  ];

  constructor() { }

  getPelicula(idPelicula: number){
    return {...this.peliculas.find(
      (pelicula: Pelicula) =>{
        return pelicula.id === idPelicula
      }
    )};
  }

  getPeliculas(){
    return [...this.peliculas];
  }  
}
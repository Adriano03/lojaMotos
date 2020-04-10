import { Injectable } from '@angular/core';
import { Produto } from './models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class MotoService {

  dados: Produto[] = [
    new Produto("MT-03", "Yamaha MT-03, 320cc, Azul e Prata", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "21.990", "assets/mt03.jpg"),

    new Produto("MT-07", "Yamaha MT-07, 689cc, Ice Fluo",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "37.790",
      "assets/mt07.jpg"),

    new Produto("MT-09", "Yamaha MT-09, 847cc, Ice Fluo",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "46.690",
      "assets/mt09.jpg"),

    new Produto("Duke 390", "KTM Duke 390, 373cc, Laranja e Branco",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "23.990",
      "assets/duke390.jpg"),

    new Produto("CB1000", "Honda CB1000, 998cc, Branca",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "41.990",
      "assets/mt03.jpg"),

    new Produto("Street Triple RS 765", "Triumph Street Triple RS 765, 765cc, Preta",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "51.900",
      "assets/765.png"),
  ]

  constructor() { }
}

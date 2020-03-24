import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent implements OnInit {

  produtos: Produto[] = [];

  constructor() { }

  ngOnInit(): void {

    this.produtos = [

      {
        id: 1,
        urlImagem: 'assets/mt03.jpg',
        titulo: 'MT-03',
        descricaoCurta: 'Yamaha MT-03, 320cc, Azul e Prata',
        valor: 'R$ 21.990',
      },

      {
        id: 2,
        urlImagem: 'assets/mt07.jpg',
        titulo: 'MT-07',
        descricaoCurta: 'Yamaha MT-07, 689cc, Ice Fluo',
        valor: 'R$ 37.790',
      },

      {
        id: 3,
        urlImagem: 'assets/mt09.jpg',
        titulo: 'MT-09',
        descricaoCurta: 'Yamaha MT-09, 847cc, Ice Fluo',
        valor: 'R$ 46.690',
      },

      {
        id: 4,
        urlImagem: 'assets/duke390.jpg',
        titulo: 'Duke 390',
        descricaoCurta: 'KTM Duke 390, 373cc, Laranja e Branco',
        valor: 'R$ 23.990',
      },

      {
        id: 5,
        urlImagem: 'assets/cb1000.png',
        titulo: 'CB 1000',
        descricaoCurta: 'Honda CB1000, 998cc, Branca',
        valor: 'R$ 41.000',
      },

      {
        id: 6,
        urlImagem: 'assets/765.png',
        titulo: 'Street Triple RS 765',
        descricaoCurta: 'Triumph Street Triple RS 765, 765cc, Preta',
        valor: 'R$ 51.900',
      }

    ];

  }

}

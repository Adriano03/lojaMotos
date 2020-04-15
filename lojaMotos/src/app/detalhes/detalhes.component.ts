import { Component, OnInit } from '@angular/core';
import { MotoService } from '../moto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  urlImagem?: string;
  titulo?: string;
  descricaoCurta?: string;
  descricaoCompleta?: string;
  valor: string;


  constructor(public motoService: MotoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.urlImagem = this.motoService.dados[id].urlImagem;
    this.titulo = this.motoService.dados[id].titulo;
    this.descricaoCurta = this.motoService.dados[id].descricaoCurta;
    this.descricaoCompleta = this.motoService.dados[id].descricaoCompleta;
    this.valor = this.motoService.dados[id].valor;

  }

}

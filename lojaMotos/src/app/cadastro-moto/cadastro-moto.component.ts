import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
import { MotoService } from '../moto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-moto',
  templateUrl: './cadastro-moto.component.html',
  styleUrls: ['./cadastro-moto.component.scss']
})
export class CadastroMotoComponent implements OnInit {

  formulario = new FormGroup({

    titulo: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
    descricaoCurta: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(30)]),
    descricaoCompleta: new FormControl(null, [Validators.required, Validators.minLength(20), Validators.maxLength(200)]),
    valor: new FormControl(null, [Validators.required, Validators.maxLength(20), this.validacaoNum] ),
    urlImagem: new FormControl(null, [Validators.required]),

  });



  constructor(public motoService: MotoService, private router: Router) { }

  ngOnInit(): void {
  }

  enviar(){
    if(this.formulario.valid){
      this.motoService.dados.push(this.formulario.value);
      this.router.navigateByUrl('produtos');
    }
  }

  validacaoNum(control: AbstractControl){

    const numero = control.value;

    if(!isNaN(Number(numero))){
      return null;
    }

    return {validacaoNum: true};

  }

}

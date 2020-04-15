import { Injectable } from '@angular/core';
import { Produto } from './models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class MotoService {

  dados: Produto[] = [
    new Produto("MT-03", "Yamaha MT-03, 320cc, Azul e Prata",
    "A MT-03 carrega o DNA “Master of Torque”, que na prática pode ser sentido nas respostas de seu motor bi cilíndrico com 321 cc com potência e torque máximo de 42 cv a 10.750 rpm e 3,00 kgf.m a 9.0000 rpm respectivamente.",
    "21.990", "assets/mt03.jpg"),

    new Produto("MT-07", "Yamaha MT-07, 689cc, Ice Fluo",
      "A MT-07 carrega o DNA “Master of Torque” oferecendo uma pilotagem ágil, estável e cheia de emoção, capaz de acelerações e retomadas brutais.",
      "37.790",
      "assets/mt07.jpg"),

    new Produto("MT-09", "Yamaha MT-09, 847cc, Ice Fluo",
      "O motor de 3 cilindros é capaz de gerar um torque brutal de 8,92 kgf.m. Esse modelo é leve, com peso de apenas 193 quilos, que dividido pelos 115 cv do motor, gera ótima relação peso e potência de 1,67 quilo por cv.",
      "46.690",
      "assets/mt09.jpg"),

    new Produto("Duke 390", "KTM Duke 390, 373cc, Laranja e Branco",
      "A KTM 390 DUKE é um puro exemplo do que atrai tantos à emoção de andar de moto pelas ruas. Esta Corner Rocket maximiza a diversão e o valor de utilidade, recebendo as honras em todas as situações que exigem condução ágil. Leve como uma pluma, poderosa e repleta de tecnologia de ponta, ela garante uma experiência emocionante, quer você conquistando seu caminho pela selva urbana ou gravando seu nome em uma floresta de curvas.",
      "23.990",
      "assets/duke390.jpg"),

    new Produto("CB1000", "Honda CB1000, 998cc, Branca",
      "Com freios C-ABS de série, a CB 1000R Barracuda segue com o mesmo motor da linha tradicional: um 4 cilindros de 998,3 cc, que rende 125,1 cavalos de potência máxima a 10.000 rpm e 10,1 kgfm de torque a 7.750 rpm.",
       "41.990",
      "assets/cb1000.png"),

    new Produto("Street Triple RS 765", "Triumph Street Triple RS 765, 765cc, Preta",
      "Desenvolvida a partir do celebrado motor de corrida ‘Daytona’, o mais novo motor Street Triple de 765 cc fornece consideravelmente mais potência e torque Com mais de 80 novas peças, incluindo uma nova câmara de combustão, virabrequim, pistões e camisas de alumínio com revestimento Nikasil, o resultado é um avanço espetacular em desempenho, particularmente em rotações baixas e intermediárias",
      "51.900",
      "assets/765.png"),
  ]

  constructor() { }
}

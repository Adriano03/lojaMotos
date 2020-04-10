import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CadastroMotoComponent } from './cadastro-moto/cadastro-moto.component';


const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'produtos', component: ListaProdutosComponent },
  { path: 'cadastroMoto', component: CadastroMotoComponent },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

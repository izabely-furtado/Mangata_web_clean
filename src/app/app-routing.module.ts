import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './pages/hello/hello.component';
import { GoodbyeComponent } from './pages/goodbye/goodbye.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ProdutoComponent } from './pages/cadastro/produto/produto.component';
import { EnderecoComponent } from './pages/cadastro/endereco/endereco.component';
import { ColaboradorComponent } from './pages/cadastro/colaborador/colaborador.component';
import { EventoComponent } from './pages/cadastro/eventos/evento.component';
import { ParceiroComponent } from './pages/cadastro/parceiro/parceiro.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'goodbye', component: GoodbyeComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cadastro/produto', component: ProdutoComponent },
  { path: 'cadastro/endereco', component: EnderecoComponent },
  { path: 'cadastro/colaborador', component: ColaboradorComponent },
  { path: 'cadastro/eventos', component: EventoComponent },
  { path: 'cadastro/parceiro', component: ParceiroComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './pages/hello/hello.component';
import { GoodbyeComponent } from './pages/goodbye/goodbye.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { EnderecoComponent } from './pages/endereco/endereco.component';
import { ColaboradorComponent } from './pages/colaborador/colaborador.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'goodbye', component: GoodbyeComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cadastro/produto', component: ProdutoComponent },
  { path: 'cadastro/endereco', component: EnderecoComponent },
  { path: 'cadastro/colaborador', component: ColaboradorComponent },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

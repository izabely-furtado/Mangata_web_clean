import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './modules/hello/hello.component';
import { GoodbyeComponent } from './modules/goodbye/goodbye.component';
import { PerfilComponent } from './modules/perfil/perfil.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'goodbye', component: GoodbyeComponent },
  { path: 'perfil', component: PerfilComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

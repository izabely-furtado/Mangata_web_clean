import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './components/hello/hello.component';
import { GoodbyeComponent } from './components/goodbye/goodbye.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'goodbye', component: GoodbyeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

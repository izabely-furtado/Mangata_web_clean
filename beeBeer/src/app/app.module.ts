import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { GoodbyeComponent } from './components/goodbye/goodbye.component';
import {DockModule} from 'primeng/dock';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    GoodbyeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

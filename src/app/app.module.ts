import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { RouterModule } from '@angular/router';
import { BarbieRoutes } from './barbie.routing';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BarbieRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

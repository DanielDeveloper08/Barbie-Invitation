import { Routes, RouterModule } from '@angular/router';
import { TicketsComponent } from './components/tickets/tickets.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio'},
  { path: 'inicio', component: InicioComponent  },
  { path: 'tickets', component: TicketsComponent  },
  { path: '**', redirectTo: 'inicio'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class BarbieRoutes {}
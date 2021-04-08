import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PontoTuristicoPage } from './ponto-turistico.page';

const routes: Routes = [
  {
    path: '',
    component: PontoTuristicoPage
  },
  {
    path: 'igrejas',
    loadChildren: () => import('./igrejas/igrejas.module').then( m => m.IgrejasPageModule)
  },
  {
    path: 'rios',
    loadChildren: () => import('./rios/rios.module').then( m => m.RiosPageModule)
  },
  {
    path: 'outros',
    loadChildren: () => import('./outros/outros.module').then( m => m.OutrosPageModule)
  },
  {
    path: 'praca',
    loadChildren: () => import('./praca/praca.module').then( m => m.PracaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PontoTuristicoPageRoutingModule {}

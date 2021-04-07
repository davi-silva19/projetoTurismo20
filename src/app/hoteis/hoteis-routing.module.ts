import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoteisPage } from './hoteis.page';

const routes: Routes = [
  {
    path: '',
    component: HoteisPage
  },
  {
    path: 'portal-guaras',
    loadChildren: () => import('./portal-guaras/portal-guaras.module').then( m => m.PortalGuarasPageModule)
  },
  {
    path: 'pousada-elite',
    loadChildren: () => import('./pousada-elite/pousada-elite.module').then( m => m.PousadaElitePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoteisPageRoutingModule {}

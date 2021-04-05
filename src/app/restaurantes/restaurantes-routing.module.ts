import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantesPage } from './restaurantes.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantesPage
  },
  {
    path: 'esperanca',
    loadChildren: () => import('./esperanca/esperanca.module').then( m => m.EsperancaPageModule)
  },
  {
    path: 'r-portal',
    loadChildren: () => import('./r-portal/r-portal.module').then( m => m.RPortalPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantesPageRoutingModule {}

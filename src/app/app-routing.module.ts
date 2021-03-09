import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'rota',
    loadChildren: () => import('./rota/rota.module').then( m => m.RotaPageModule)
  },
  {
    path: 'ponto-turistico',
    loadChildren: () => import('./ponto-turistico/ponto-turistico.module').then( m => m.PontoTuristicoPageModule)
  },
  {
    path: 'povoados',
    loadChildren: () => import('./povoados/povoados.module').then( m => m.PovoadosPageModule)
  },
  {
    path: 'hoteis',
    loadChildren: () => import('./hoteis/hoteis.module').then( m => m.HoteisPageModule)
  },
  {
    path: 'restaurantes',
    loadChildren: () => import('./restaurantes/restaurantes.module').then( m => m.RestaurantesPageModule)
  },
  {
    path: 'historia',
    loadChildren: () => import('./historia/historia.module').then( m => m.HistoriaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

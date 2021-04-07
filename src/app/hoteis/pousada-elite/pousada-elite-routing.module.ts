import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PousadaElitePage } from './pousada-elite.page';

const routes: Routes = [
  {
    path: '',
    component: PousadaElitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PousadaElitePageRoutingModule {}

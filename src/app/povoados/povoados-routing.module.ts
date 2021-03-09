import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PovoadosPage } from './povoados.page';

const routes: Routes = [
  {
    path: '',
    component: PovoadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PovoadosPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoteisPage } from './hoteis.page';

const routes: Routes = [
  {
    path: '',
    component: HoteisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoteisPageRoutingModule {}

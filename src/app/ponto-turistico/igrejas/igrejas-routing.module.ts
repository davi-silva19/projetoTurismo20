import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IgrejasPage } from './igrejas.page';

const routes: Routes = [
  {
    path: '',
    component: IgrejasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IgrejasPageRoutingModule {}

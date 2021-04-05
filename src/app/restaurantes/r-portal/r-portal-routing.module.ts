import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RPortalPage } from './r-portal.page';

const routes: Routes = [
  {
    path: '',
    component: RPortalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RPortalPageRoutingModule {}


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RPortalPageRoutingModule } from './r-portal-routing.module';

import { RPortalPage } from './r-portal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RPortalPageRoutingModule
  ],
  declarations: [RPortalPage]
})
export class RPortalPageModule {}

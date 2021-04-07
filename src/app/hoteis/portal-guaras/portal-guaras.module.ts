import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortalGuarasPageRoutingModule } from './portal-guaras-routing.module';

import { PortalGuarasPage } from './portal-guaras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortalGuarasPageRoutingModule
  ],
  declarations: [PortalGuarasPage]
})
export class PortalGuarasPageModule {}

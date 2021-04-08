import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IgrejasPageRoutingModule } from './igrejas-routing.module';

import { IgrejasPage } from './igrejas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IgrejasPageRoutingModule
  ],
  declarations: [IgrejasPage]
})
export class IgrejasPageModule {}

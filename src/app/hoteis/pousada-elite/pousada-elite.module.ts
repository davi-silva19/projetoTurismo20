import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PousadaElitePageRoutingModule } from './pousada-elite-routing.module';

import { PousadaElitePage } from './pousada-elite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PousadaElitePageRoutingModule
  ],
  declarations: [PousadaElitePage]
})
export class PousadaElitePageModule {}

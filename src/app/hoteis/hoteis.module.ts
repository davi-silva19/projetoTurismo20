import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoteisPageRoutingModule } from './hoteis-routing.module';

import { HoteisPage } from './hoteis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoteisPageRoutingModule
  ],
  declarations: [HoteisPage]
})
export class HoteisPageModule {}

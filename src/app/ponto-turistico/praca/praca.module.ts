import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PracaPageRoutingModule } from './praca-routing.module';

import { PracaPage } from './praca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PracaPageRoutingModule
  ],
  declarations: [PracaPage]
})
export class PracaPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PovoadosPageRoutingModule } from './povoados-routing.module';

import { PovoadosPage } from './povoados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PovoadosPageRoutingModule
  ],
  declarations: [PovoadosPage]
})
export class PovoadosPageModule {}

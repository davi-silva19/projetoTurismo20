import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule } from '@ionic/angular';

import { RotaPageRoutingModule } from './rota-routing.module';

import { RotaPage } from './rota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RotaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RotaPage],
  providers: [Geolocation]
})
export class RotaPageModule {}

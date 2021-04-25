import { ModalComponent } from './../../components/modal/modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { EsperancaPageRoutingModule } from './esperanca-routing.module';

import { EsperancaPage } from './esperanca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsperancaPageRoutingModule
  ],
  declarations: [EsperancaPage],
  providers: [Geolocation]
})
export class EsperancaPageModule {}

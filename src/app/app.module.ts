import { ModalComponent } from 'src/app/components/modal/modal.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PTuristicoComponent } from './components/p-turistico/p-turistico.component';

@NgModule({
  declarations: [AppComponent, ModalComponent,  PTuristicoComponent],
  entryComponents: [ModalComponent, PTuristicoComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

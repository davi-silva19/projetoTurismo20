import { ModalComponent } from './../../components/modal/modal.component';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-esperanca',
  templateUrl: './esperanca.page.html',
  styleUrls: ['./esperanca.page.scss'],
})
export class EsperancaPage implements OnInit {
  map: google.maps.Map;
  public cardapios: Array<Object> = [
    {
      "titulo_res": "Cardapios",
      "nome": "Trinchado de Carne",
      "preco": "R$ 15,00",
      "complementos": "Arroz, Macarrão, Vinagrete, Feijão, Farofa",
      "imagem": "/assets/icon/img/nira/trinchado de carne.jpg"
    },
    {
      "titulo_res": "Cardapios ",
      "nome": "Pescada Frita",
      "preco": "R$ 25,00",
      "complementos": "Arroz, Macarrão, Vinagrete, Feijão, Farofa",
      "imagem": "/assets/icon/img/nira/pescada.jpg"
    }
  ];
  public titulo: Array<object> =[{"nome": "Cardapios"}]
 

  constructor(private modalCtrl: ModalController,
     private geolocation: Geolocation) { }

  ngOnInit() {
  }
  
  async modalCardapio(cardapios){
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        cardapioModal: this.cardapios,
        tituloModal: this.titulo,
        
      }
    })
    
     await modal.present();
  }
  
  
}

import { ModalComponent } from './../../components/modal/modal.component';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-esperanca',
  templateUrl: './esperanca.page.html',
  styleUrls: ['./esperanca.page.scss'],
})
export class EsperancaPage implements OnInit {
  map: google.maps.Map;
  public localizacao: Array<any>= [{
    "nome": "Localização",
    "url" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.535503803955!2d-44.63819555032663!3d-1.938283437223039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f7955ba9556313%3A0x14278f904794eeb2!2sPousada%20e%20Restaurante%20Portal%20dos%20Guar%C3%A1s!5e0!3m2!1spt-BR!2sbr!4v1617719320744!5m2!1spt-BR!2sbr"
  }];
  public cardapios: Array<any> = [
    {
      titulo_res: "Cardapios",
      nome: "Trinchado de Carne",
      preco: "R$ 15,00",
      complementos: "Arroz, Macarrão, Vinagrete, Feijão, Farofa",
      imagem: "/assets/icon/img/nira/trinchado de carne.jpg"
    },
    {
      titulo_res: "Cardapios ",
      nome: "Pescada Frita",
      preco: "R$ 25,00",
      complementos: "Arroz, Macarrão, Vinagrete, Feijão, Farofa",
      imagem: "/assets/icon/img/nira/pescada.jpg"
    }
  ];
  public titulo: Array<any> =[{nome: "Cardapios"}]


  constructor(private modalCtrl: ModalController,
     private geolocation: Geolocation, public alertController: AlertController) { }

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
  };
  async localizaModal(){
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        localizaModal_Res_Esp: this.localizacao,
        tituloModal: this.localizacao

      }
    })

     await modal.present();
  };
  async telefoneAlert(){
    const alert = await this.alertController.create({
      header: "Telefone para Contato",
      subHeader: "(98) 98433-8665",
      buttons: ['Ok']
    });
    await alert.present();
  }


}

import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-r-portal',
  templateUrl: './r-portal.page.html',
  styleUrls: ['./r-portal.page.scss'],
})
export class RPortalPage implements OnInit {
  public localizacao: Array<object>= [{
    "nome": "Localização",
    "url" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.535503803955!2d-44.63819555032663!3d-1.938283437223039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f7955ba9556313%3A0x14278f904794eeb2!2sPousada%20e%20Restaurante%20Portal%20dos%20Guar%C3%A1s!5e0!3m2!1spt-BR!2sbr!4v1617719320744!5m2!1spt-BR!2sbr"
  }];
  public cardapios: Array<Object> = [
    {
      "nome": "Camarão  ao alho e oléo",
      "preco": "R$ 35,00",
      "complementos": "Arroz, Macarrão, Vinagrete, Feijão, Farofa",
      "imagem": "/assets/icon/img/portalg/camaraoalhoeoleo.jpg"
    },
    {

      "nome": "Bife Acebolado",
      "preco": "R$ 20,00",
      "complementos": "Arroz, Macarrão, Vinagrete, Feijão, Farofa",
      "imagem": "/assets/icon/img/portalg/bifeacebolado.png"
    },

  ];
  public titulo: Array<object> =[{"nome": "Cardapios"}]

  constructor(private modalCtrl: ModalController, public alertController: AlertController) { }

  ngOnInit() {
  }
  async modalCardapio(cardapios){
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        cardapioModal: this.cardapios,
        tituloModal: this.titulo

      }
    })

     await modal.present();
  };
  async localizaModal(){
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        localizaModal_Portal: this.localizacao,
        tituloModal: this.localizacao

      }
    })

     await modal.present();
  };
  async telefoneAlert (){
    const alert = await this.alertController.create({
      header: "Telefone para Contato",
      subHeader: "(98) 98433-8665",
      buttons: ['Ok']
    });
    await alert.present();
  }

}

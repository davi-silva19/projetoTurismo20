import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-r-portal',
  templateUrl: './r-portal.page.html',
  styleUrls: ['./r-portal.page.scss'],
})
export class RPortalPage implements OnInit {
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

  constructor(private modalCtrl: ModalController) { }

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
  }
  
}

import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-pousada-elite',
  templateUrl: './pousada-elite.page.html',
  styleUrls: ['./pousada-elite.page.scss'],
})
export class PousadaElitePage implements OnInit {
  public localizacao: Array<object>= [{
    "nome": "Localização",
    "url" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.535503803955!2d-44.63819555032663!3d-1.938283437223039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f7955ba9556313%3A0x14278f904794eeb2!2sPousada%20e%20Restaurante%20Portal%20dos%20Guar%C3%A1s!5e0!3m2!1spt-BR!2sbr!4v1617719320744!5m2!1spt-BR!2sbr"
  }]

  constructor(private modalCtrl: ModalController, public alertController: AlertController) { }
  public valores: Array<any>= [{
    nome: "Valores",
    imagem: "/assets/icon/img/pousadae/quarto.jpeg",
    sub_titulo: "1 Cama de Casal",
    titulo: "Quarto Casal Basico",
    cafe: "Café da Manhã",
    wifi: "Wifi Gratuito",
    ar_condicionado: "Sem Ar-condicionado",
    banheiro: "Com banheiro",
    tv: "Sem Tv",
    valor: "50,00",
  },
  {
    nome: "Valores",
    imagem: "/assets/icon/img/pousadae/quarto2.jpeg",
    sub_titulo: "1 Cama de Casal e 1 de Solteiro",
    titulo: "Quarto Casal Completo",
    cafe: "Café da Manhã",
    wifi: "Wifi Gratuito",
    ar_condicionado: "Com Ar-condicionado",
    banheiro: "Com banheiro",
    tv: "Com Tv",
    valor: "90,00",
  }
  ];
  public titulo: Array<object> =[{"nome": "Valores"}]
  ngOnInit() {
  }

  async localizaModal(){
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        localizaModal_PousadaElite: this.localizacao,
        tituloModal: this.localizacao


      }
    })

     await modal.present();
  };
  async valoresModal(){
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        valorModal: this.valores,
        tituloModal: this.titulo
      }
    })

     await modal.present();
  };
  async telefoneAlert (){
    const alert = await this.alertController.create({
      header: "Telefone para Contato",
      subHeader: "(98) 98456-6908",
      buttons: ['Ok']
    });
    await alert.present();
  }

}

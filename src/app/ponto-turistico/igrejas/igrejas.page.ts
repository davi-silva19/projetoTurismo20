import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { PTuristicoComponent } from 'src/app/components/p-turistico/p-turistico.component';

@Component({
  selector: 'app-igrejas',
  templateUrl: './igrejas.page.html',
  styleUrls: ['./igrejas.page.scss'],
})
export class IgrejasPage implements OnInit {
  public localizacao: Array<any>= [{
    "nome": "Localização",
    "url" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.535503803955!2d-44.63819555032663!3d-1.938283437223039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f7955ba9556313%3A0x14278f904794eeb2!2sPousada%20e%20Restaurante%20Portal%20dos%20Guar%C3%A1s!5e0!3m2!1spt-BR!2sbr!4v1617719320744!5m2!1spt-BR!2sbr"
  }];
  public igrejas: Array<any>=[{
    nome: "Igreja Nossa Senhora dos Remédios",
    local: "Povoado Rabeca",
    img: "/assets/icon/img/pturisticos/igrejas/igrejarabeca.jpg",
    text: "A Igreja de Nossa Senhora dos Remédios localizada no povoado de Rabeca, município de Porto Rico é o prédio é o monumento mais antigo do litoral norte ocidental, é uma igreja coberta por histórias e tradições. O seu prédio se encontra na rua do Ceará, ao lado do “barracão” e sua criação está datada em 1882. Com quase 140 anos de história, ainda é possível ler histórias e serviços que eram realizados pelos mais antigos na época de sua criação através de livros e atas deixados que são guardados e cuidados pelos moradores de Rabeca. Todos os anos, no mês de outubro é realizado o Festejo de Nossa Senhora dos Remédios, em homenagem a padroeira os moradores realizam o famoso “levantamento de mastro”, que é uma tradição o qual um grupo de pessoas levantam um tronco de arvore cheios de frutas como cocos, bananas e outros. O festejo conta com festa dançante sonorizado pelas radiolas locais, como a radiola Fera Negra que tradicionalmente todos os anos diverte os fieis presentes.  "
  },
  {
    nome: "Igreja Assembleia de Deus",
    local: "Porto Rico",
    img: "/assets/icon/img/pturisticos/igrejas/assembleia1.jpeg",
  }]
  public nsenhoraremedio: Array<object>=[{
    "nome": "Igreja Nossa Senhora dos Remédios",
    "local": "Povoado Rabeca",
    "img": "/assets/icon/img/pturisticos/igrejas/igrejarabeca.jpg",
    "text": "A Igreja de Nossa Senhora dos Remédios localizada no povoado de Rabeca, município de Porto Rico é o prédio é o monumento mais antigo do litoral norte ocidental, é uma igreja coberta por histórias e tradições. O seu prédio se encontra na rua do Ceará, ao lado do “barracão” e sua criação está datada em 1882. Com quase 140 anos de história, ainda é possível ler histórias e serviços que eram realizados pelos mais antigos na época de sua criação através de livros e atas deixados que são guardados e cuidados pelos moradores de Rabeca. Todos os anos, no mês de outubro é realizado o Festejo de Nossa Senhora dos Remédios, em homenagem a padroeira os moradores realizam o famoso “levantamento de mastro”, que é uma tradição o qual um grupo de pessoas levantam um tronco de arvore cheios de frutas como cocos, bananas e outros. O festejo conta com festa dançante sonorizado pelas radiolas locais, como a radiola Fera Negra que tradicionalmente todos os anos diverte os fieis presentes.  "
  }]
  public assembleiaDeDeus: Array<object>=[{
    nome: "Igreja Assembleia de Deus",
    local: "Porto Rico",
    img: "/assets/icon/img/pturisticos/igrejas/assembleia1.jpeg",
    text: ""
  }]
  constructor(public modalCtrl: ModalController) {
    this.igrejas;
  }

  ngOnInit() {
  }
  public abrirDetalhes(nome){
    if(nome == "Igreja Nossa Senhora dos Remédios"){
      console.log(nome)
      this.nsRemedioModal()
    }
    if(nome == "Igreja Assembleia de Deus"){
      console.log(nome)
      this.assembleiaModal()
    }

  }
  async nsRemedioModal(){
    const modal = await this.modalCtrl.create({
      component: PTuristicoComponent,
      componentProps: {
        igrejasModal: this.nsenhoraremedio,
        titulo: "Nossa Srª dos Remedios"

      },

    })

     await modal.present();
  };
  async assembleiaModal(){
    const modal = await this.modalCtrl.create({
      component: PTuristicoComponent,
      componentProps: {
        igrejasModal: this.assembleiaDeDeus,
        titulo: "Assembleia de Deus"

      },

    })

     await modal.present();
  };
  public localizacaoDetalhes(nome){
    if(nome == "Igreja Nossa Senhora dos Remédios"){
      this.local_remediosModal();
    }
    if(nome == "Igreja Assembleia de Deus"){
      this.local_assembleia();
    }

    }
    async local_remediosModal(){
      const modal = await this.modalCtrl.create({
        component: PTuristicoComponent,
        componentProps: {
          localiza_remediosModal: this.localizacao,
          titulo: "Localização Igreja Nº Sraª dos Remedios"
        },
      })
       await modal.present();
    };
    async local_assembleia(){
      const modal = await this.modalCtrl.create({
        component: PTuristicoComponent,
        componentProps: {
          localiza_assembleia: this.localizacao,
          titulo: "Localização Assembleia de Deus"
        },
      })
       await modal.present();
    };
}

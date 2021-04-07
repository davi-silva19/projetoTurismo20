import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { PTuristicoComponent } from '../components/p-turistico/p-turistico.component';

@Component({
  selector: 'app-ponto-turistico',
  templateUrl: './ponto-turistico.page.html',
  styleUrls: ['./ponto-turistico.page.scss'],
})
export class PontoTuristicoPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 600,
    grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.10,},
  };
public imagens: Array<object>=[{
  "img": "/assets/icon/img/pturisticos/slide/portal.jpg"
},{
  "img": "/assets/icon/img/pturisticos/slide/GOPR3516.JPG"
},
{
  "img": "/assets/icon/img/pturisticos/slide/GOPR2186.JPG"
},
{
  "img": "/assets/icon/img/pturisticos/slide/rabeca.jpeg"
},
{
  "img": "/assets/icon/img/pturisticos/slide/49Porto Rico Noturna Drn.JPG"
},
{
  "img": "/assets/icon/img/pturisticos/slide/pedreira.jpg"
}]
public rios: Array<object>=[{
  "nome": "Rio Verde",
  "local": "Povoado Rabeca",
  "img": "/assets/icon/img/pturisticos/rios/rioverde1.jpg",
  "text": ""
},
{
  "nome": "Rio Monduril",
  "local": "Povoado Rabeca",
  "img": "/assets/icon/img/pturisticos/rios/riomonduril1.jpg",
  "text": ""
}]

public igrejas: Array<object>=[{
  "nome": "Igreja Nossa Senhora dos Remédios",
  "local": "Povoado Rabeca",
  "img": "",
  "text": "A Igreja de Nossa Senhora dos Remédios localizada no povoado de Rabeca, município de Porto Rico é o prédio é o monumento mais antigo do litoral norte ocidental, é uma igreja coberta por histórias e tradições. O seu prédio se encontra na rua do Ceará, ao lado do “barracão” e sua criação está datada em 1882. Com quase 140 anos de história, ainda é possível ler histórias e serviços que eram realizados pelos mais antigos na época de sua criação através de livros e atas deixados que são guardados e cuidados pelos moradores de Rabeca. Todos os anos, no mês de outubro é realizado o Festejo de Nossa Senhora dos Remédios, em homenagem a padroeira os moradores realizam o famoso “levantamento de mastro”, que é uma tradição o qual um grupo de pessoas levantam um tronco de arvore cheios de frutas como cocos, bananas e outros. O festejo conta com festa dançante sonorizado pelas radiolas locais, como a radiola Fera Negra que tradicionalmente todos os anos diverte os fieis presentes.  "
}]
  constructor(public modalCtrl: ModalController) {
    this.imagens
  }

  ngOnInit() {
  }
  async igrejasModal(){
    const modal = await this.modalCtrl.create({
      component: PTuristicoComponent,
      componentProps: {
        igrejaModal: this.igrejas,
        titulo: "Igrejas"
      }
    })

     await modal.present();
  };
  async riosModal(){
    const modal = await this.modalCtrl.create({
      component: PTuristicoComponent,
      componentProps: {
        titulo: "Rios",
        rioModal: this.rios
      }
    })

     await modal.present();
  };
  async pracasModal(){
    const modal = await this.modalCtrl.create({
      component: PTuristicoComponent,
      componentProps: {
        titulo: "Praças"
      }
    })

     await modal.present();
  };
  async outrosModal(){
    const modal = await this.modalCtrl.create({
      component: PTuristicoComponent,
      componentProps: {
        titulo: "Outros"
      }
    })

     await modal.present();
  };
}

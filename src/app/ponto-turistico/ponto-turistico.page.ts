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
public imagens: Array<any>=[{
  img: "/assets/icon/img/pturisticos/slide/portal.jpg"
},{
  img: "/assets/icon/img/pturisticos/slide/GOPR3516.JPG"
},
{
  img: "/assets/icon/img/pturisticos/slide/GOPR2186.JPG"
},
{
  img: "/assets/icon/img/pturisticos/slide/rabeca.jpeg"
},
{
  img: "/assets/icon/img/pturisticos/slide/49Porto Rico Noturna Drn.JPG"
},
{
  img: "/assets/icon/img/pturisticos/slide/pedreira.jpg"
}]
public rios: Array<any>=[{
  nome: "Rio Verde",
  local: "Povoado Rabeca",
  img: "/assets/icon/img/pturisticos/rios/rioverde1.jpg",
  text: ""
},
{
  nome: "Rio Monduril",
  local: "Povoado Rabeca",
  img: "/assets/icon/img/pturisticos/rios/riomonduril1.jpg",
  text: ""
}]


  constructor(public modalCtrl: ModalController) {
    this.imagens
  }

  ngOnInit() {
  }

}

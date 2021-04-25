import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PTuristicoComponent } from 'src/app/components/p-turistico/p-turistico.component';

@Component({
  selector: 'app-praca',
  templateUrl: './praca.page.html',
  styleUrls: ['./praca.page.scss'],
})
export class PracaPage implements OnInit {
  public localizacao: Array<object>= [{
    "nome": "Localização",
    "url" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.535503803955!2d-44.63819555032663!3d-1.938283437223039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f7955ba9556313%3A0x14278f904794eeb2!2sPousada%20e%20Restaurante%20Portal%20dos%20Guar%C3%A1s!5e0!3m2!1spt-BR!2sbr!4v1617719320744!5m2!1spt-BR!2sbr"
  }];
  public pracas:Array<any>=[{
    nome: "Praça da Betel",
    local: "Porto Rico",
    img: "/assets/icon/img/pturisticos/praças/praca1.jpg",
    text: ""
  }]
  public pracaBetel:Array<object>=[{
    nome: "Praça da Betel",
    local: "Porto Rico",
    img: "/assets/icon/img/pturisticos/praças/praca1.jpg",
    text: "Um dos mais novos atrativos turísticos do município de Porto Rico se dá o nome de Praça da Betel, que se localiza na MA-302 no bairro da Betel em Porto Rico do Maranhão. Sendo inaugurado no ano de 2019, se tornou um ponto de recreação que ganhou como sua forma a imagem de um guará homenageando a Florestas dos Guarás cujo Porto Rico faz parte. No fim das tardes é comum observar crianças em seu momento de lazer e jovens e adultos realizando a pratica de atividades físicas."
  },]
  constructor(public modalCtrl: ModalController) {
    this.pracaBetel;
   }

  ngOnInit() {
  }
  public abrirDetalhes(nome){
    if(nome== "Praça da Betel"){
      this.pracaBetelModal()
    }
  }
  async pracaBetelModal(){
    const modal = await this.modalCtrl.create({
      component: PTuristicoComponent,
      componentProps: {
        pracaModal: this.pracaBetel,
        titulo: "Praça da Betel"

      },
    })
     await modal.present();
  };
  public localizacaoDetalhes(nome){
    if(nome == "Praça da Betel"){
      this.local_pracaBetel();
    }
  }
  async local_pracaBetel(){
    const modal = await this.modalCtrl.create({
      component: PTuristicoComponent,
      componentProps: {
        localiza_pracaBetel: this.localizacao,
        titulo: "Localização Praça Betel"
      },
    })
     await modal.present();
  };

}

import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { PTuristicoComponent } from 'src/app/components/p-turistico/p-turistico.component';

@Component({
  selector: 'app-outros',
  templateUrl: './outros.page.html',
  styleUrls: ['./outros.page.scss'],
})
export class OutrosPage implements OnInit {
  public localizacao: Array<object>= [{
    "nome": "Localização",
    "url" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.535503803955!2d-44.63819555032663!3d-1.938283437223039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f7955ba9556313%3A0x14278f904794eeb2!2sPousada%20e%20Restaurante%20Portal%20dos%20Guar%C3%A1s!5e0!3m2!1spt-BR!2sbr!4v1617719320744!5m2!1spt-BR!2sbr"
  }];
  public outros: Array<object>=[{
    "nome": "Porto da Pedreira",
    "local": "Porto Rico",
    "img": "/assets/icon/img/pturisticos/pedreira.jpg",
    "text": ""
  },
  {
    "nome": "Atracadouro Hidroviario",
    "local": "Povoado Cateaua",
    "img": "/assets/icon/img/pturisticos/atracadouro.jpeg",
    "text": ""
  }];
  public caisCateaua: Array<object>=[{
    "nome": "Atracadouro Hidroviario",
    "local": "Povoado Cateaua",
    "img": "/assets/icon/img/pturisticos/atracadouro.jpeg",
    "text": "Mais conhecido como balsa flutuante, o cais tem o nome de” Atracadouro Hidroviário “, ou seja, local onde se ancoram as embarcações. Todavia, o significado de Hidroviário é relativo a hidrovias, uma rota pré-determinada para o tráfego aquático, de suma importância para essestipos de transporte. Na atualidade, facilita embarques e desembarques das embarcações, principalmente barcos pesqueiros. Sendo um dos atrativos turísticos mais frequentado pelas pessoas, pois é ótimo para registrar momentos felizes com a brisa da maré batendo no rosto e no seu entrono uma natureza exuberante."
  }]
  public portoPedreira: Array<object>=[{
    "nome": "Porto da Pedreira",
    "local": "Porto Rico",
    "img": "/assets/icon/img/pturisticos/pedreira.jpg",
    "text": "O Porto da Pedreira é um grande porto localizado em Porto Rico, onde, tem uma enorme cooperação econômica no município proveniente a grande quantidade de peixes e mariscos que chegam todos os dias. Devido sua localização geográfica e estratégica, o porto ocupa cerca de 60% do número de embarques e desembarques de transportes marítimos do município, tendo em vista que grande parte da população de Porto Rico são pescadores, a grande circulação nesta área se dá todos os dias. "
  }]
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }
  public abrirDetalhes(nome){
    if(nome== "Porto da Pedreira"){
      console.log(nome)
      this.portoPedreiraModal()
    }
    if(nome== "Atracadouro Hidroviario"){
      console.log(nome)
      this.caisCateauaModal()
    }
  }
  async portoPedreiraModal(){
    const modal = await this.modalCtrl.create({
      component: PTuristicoComponent,
      componentProps: {
        outrosModal: this.portoPedreira,
        titulo: "Porto Pedreira"

      },

    })

     await modal.present();
  };
  async caisCateauaModal(){
    const modal = await this.modalCtrl.create({
      component: PTuristicoComponent,
      componentProps: {
        outrosModal: this.caisCateaua,
        titulo: "Atracadouro Hidroviario"

      },

    })

     await modal.present();
  };
  public localizacaoDetalhes(nome){
    if(nome == "Porto da Pedreira"){
      this.local_pedreira();
    }
    if(nome == "Atracadouro Hidroviario"){
      this.local_atracadouro();
    }

    }
    async local_pedreira(){
      const modal = await this.modalCtrl.create({
        component: PTuristicoComponent,
        componentProps: {
          localiza_pedreira: this.localizacao,
          titulo: "Localização Porto da Pedreira"
        },
      })
       await modal.present();
    };
    async local_atracadouro(){
      const modal = await this.modalCtrl.create({
        component: PTuristicoComponent,
        componentProps: {
          localiza_atracadouro: this.localizacao,
          titulo: "Localização Atracadouro"
        },
      })
       await modal.present();
    };
}

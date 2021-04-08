import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { PTuristicoComponent } from 'src/app/components/p-turistico/p-turistico.component';

@Component({
  selector: 'app-outros',
  templateUrl: './outros.page.html',
  styleUrls: ['./outros.page.scss'],
})
export class OutrosPage implements OnInit {
  public outros: Array<object>=[{
    "nome": "Porto da Pedreira",
    "local": "Porto Rico",
    "img": "/assets/icon/img/pturisticos/pedreira.jpg",
    "text": ""
  },
  {
    "nome": "Atracadouro Hidroviario",
    "local": "Povoado Cateaua",
    "img": "/assets/icon/img/pturisticos/caiscateaua.jpg",
    "text": ""
  }];
  public caisCateaua: Array<object>=[{
    "nome": "Atracadouro Hidroviario",
    "local": "Povoado Cateaua",
    "img": "/assets/icon/img/pturisticos/caiscateaua.jpg",
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
}

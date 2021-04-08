import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { PTuristicoComponent } from 'src/app/components/p-turistico/p-turistico.component';

@Component({
  selector: 'app-rios',
  templateUrl: './rios.page.html',
  styleUrls: ['./rios.page.scss'],
})
export class RiosPage implements OnInit {
  public rios:Array<object>=[{
    "nome": "Rio Verde",
    "local": "Povoado Rabeca",
    "img": "/assets/icon/img/pturisticos/rios/rioverde1.jpg",
    "text": ""
  },
  {
    "nome": "Fonte Grande",
    "local": "Povoado Sumauma",
    "img": "/assets/icon/img/pturisticos/rios/fontegrande1.jpg",
    "text": ""
  },
  {
    "nome": "Rio Monduril",
    "local": "Povoado Rabeca",
    "img": "/assets/icon/img/pturisticos/rios/riomonduril1.jpg",
    "text": ""
  }]
  public rioverde:Array<object>=[{
    "nome": "Rio Verde",
    "local": "Povoado Rabeca",
    "img": "/assets/icon/img/pturisticos/rios/rioverde1.jpg",
    "text": "O Rio Verde está localizado no bairro do São José no povoado de Rabeca município de Porto Rico do Maranhão. No momento é a grande sensação turística do município, o rio tem atraído turista de todas as regiões do maranhão. O rio localiza-se em uma propriedade particular que tem uma enorme participação nesse sucesso com seus cuidados e preservações diárias. Tendo como principal atrativo a transparência de sua água, o rio verde é também uma nascente de água doce, o que se torna em enorme importância para aquela região. "
  },]
  public fonteGrande: Array<object>=[
    {
      "nome": "Fonte Grande",
      "local": "Povoado Sumauma",
      "img": "/assets/icon/img/pturisticos/rios/fontegrande1.jpg",
      "text": "O povoado de sumaúma também referencia um dos maiores pontos turísticos do município de Porto Rico, chamado de Fonte Grande, o rio tem atraídos turistas com sua beleza e água cristalina. A fonte grande tem se tornado grande referência turística na região, se localizando bem no centro do povoado se sumaúma contribui para a localização turística, a fonte tem sido sucesso nas redes sociais, com a inserção dos moradores de redes dentro água e balanços contribuíram para grande atrativo para realização de fotos pelos turistas.  "
    }]
  public monduril: Array<object>=[
  {
    "nome": "Rio Monduril",
    "local": "Povoado Rabeca",
    "img": "/assets/icon/img/pturisticos/rios/riomonduril1.jpg",
    "text": "O povoado de rabeca é campeão em atrações turísticas no município de Porto Rico, entre elas, uma das mais antigas e famosas é o Rio do Monduril que há anos atrai turistas de todas as regiões do Brasil. O rio localiza-se bem na chegada ao povoado e já chama atenção por sua área florestal de mata fechada, o rio é conhecido pela grandeza de sua área, proporcionando aos turistas áreas de conforto a todos que o visitam, espaços para realização de piqueniques, praticas de esportes e locais para estacionar carros de forma confortável. O monduril apresenta aos turistas visitas de animais da floresta como aves e macacos todos os finais da tarde. O enorme sucesso do rio se dá pela preservação feita pelos moradores da comunidade, que em temporadas realizam mutirões de limpeza e aplicam normas aos visitantes de como devem se comportar na área.  "
  }]
  constructor(public modalCtrl: ModalController) {
    this.rioverde;
    this.monduril;
    this.fonteGrande;
    this.rios;
  }

  ngOnInit() {
  }
  public abrirDetalhes(nome){
    if(nome== "Rio Verde"){
      this.rioverdeModal()
    }
    if(nome== "Rio Monduril"){
      this.riomondurilModal();
    }
    if(nome == "Fonte Grande"){
      console.log(nome)
      this.fonteGrandeModal();
    }
  }
  async rioverdeModal(){
    const modal = await this.modalCtrl.create({
      component: PTuristicoComponent,
      componentProps: {
        rioModal: this.rioverde,
        titulo: "Rio Verde"

      },

    })

     await modal.present();
  };
  async riomondurilModal(){
    const modal = await this.modalCtrl.create({
      component: PTuristicoComponent,
      componentProps: {
        rioModal: this.monduril,
        titulo: "Rio Monduril"

      }
    })

     await modal.present();
  };
  async fonteGrandeModal(){
    const modal = await this.modalCtrl.create({
      component: PTuristicoComponent,
      componentProps: {
        rioModal: this.fonteGrande,
        titulo: "Fonte Grande"

      }
    })

     await modal.present();
  };
}

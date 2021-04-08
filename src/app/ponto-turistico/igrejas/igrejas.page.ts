import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { PTuristicoComponent } from 'src/app/components/p-turistico/p-turistico.component';

@Component({
  selector: 'app-igrejas',
  templateUrl: './igrejas.page.html',
  styleUrls: ['./igrejas.page.scss'],
})
export class IgrejasPage implements OnInit {
  public igrejas: Array<object>=[{
    "nome": "Igreja Nossa Senhora dos Remédios",
    "local": "Povoado Rabeca",
    "img": "/assets/icon/img/pturisticos/igrejas/igrejarabeca.jpg",
    "text": "A Igreja de Nossa Senhora dos Remédios localizada no povoado de Rabeca, município de Porto Rico é o prédio é o monumento mais antigo do litoral norte ocidental, é uma igreja coberta por histórias e tradições. O seu prédio se encontra na rua do Ceará, ao lado do “barracão” e sua criação está datada em 1882. Com quase 140 anos de história, ainda é possível ler histórias e serviços que eram realizados pelos mais antigos na época de sua criação através de livros e atas deixados que são guardados e cuidados pelos moradores de Rabeca. Todos os anos, no mês de outubro é realizado o Festejo de Nossa Senhora dos Remédios, em homenagem a padroeira os moradores realizam o famoso “levantamento de mastro”, que é uma tradição o qual um grupo de pessoas levantam um tronco de arvore cheios de frutas como cocos, bananas e outros. O festejo conta com festa dançante sonorizado pelas radiolas locais, como a radiola Fera Negra que tradicionalmente todos os anos diverte os fieis presentes.  "
  }]
  public nsenhoraremedio: Array<object>=[{
    "nome": "Igreja Nossa Senhora dos Remédios",
    "local": "Povoado Rabeca",
    "img": "/assets/icon/img/pturisticos/igrejas/igrejarabeca.jpg",
    "text": "A Igreja de Nossa Senhora dos Remédios localizada no povoado de Rabeca, município de Porto Rico é o prédio é o monumento mais antigo do litoral norte ocidental, é uma igreja coberta por histórias e tradições. O seu prédio se encontra na rua do Ceará, ao lado do “barracão” e sua criação está datada em 1882. Com quase 140 anos de história, ainda é possível ler histórias e serviços que eram realizados pelos mais antigos na época de sua criação através de livros e atas deixados que são guardados e cuidados pelos moradores de Rabeca. Todos os anos, no mês de outubro é realizado o Festejo de Nossa Senhora dos Remédios, em homenagem a padroeira os moradores realizam o famoso “levantamento de mastro”, que é uma tradição o qual um grupo de pessoas levantam um tronco de arvore cheios de frutas como cocos, bananas e outros. O festejo conta com festa dançante sonorizado pelas radiolas locais, como a radiola Fera Negra que tradicionalmente todos os anos diverte os fieis presentes.  "
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
}

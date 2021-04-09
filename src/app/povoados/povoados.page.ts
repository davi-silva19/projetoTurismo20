import { ModalController } from '@ionic/angular';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
  selector: 'app-povoados',
  templateUrl: './povoados.page.html',
  styleUrls: ['./povoados.page.scss'],
})
export class PovoadosPage implements OnInit {
public povoados: Array<object>=[];
public rabeca: Array<object>=[];
public cateaua: Array<object>=[];
public rioGrande: Array<object>=[];
public sumauma: Array<object>=[];
public engenho: Array<object>=[];
public santaMaria: Array<object>=[];
public remanso: Array<object>=[]
//Imagens
public img_rabeca: Array<object>=[];
public img_cateaua: Array<object>=[];
public img_rioGrande: Array<object>=[];
public img_sumauma: Array<object>=[];
public img_engenho: Array<object>=[];
public img_santaMaria: Array<object>=[];
public img_remanso: Array<object>=[]


  constructor(private modalCtrl: ModalController ) {
      this.rabeca= [{
        "nome": "Rabeca",
        "msg": "O Povoado de Rabeca, sendo o primeiro, até chegar a sede do município, numa distância de 11 km, é o povoado mais evoluído, depois da sede municipal. É um povoado q carrega na sua história uma cultura centenária, umas das mais antigas da região Portorriquense, a Festa de Nossa Senhora dos Remédios, onde este festejo envolve os mais antigos moradores deste povoado, e contagia os jovens e adultos com esta tradição, atraindo também os moradores de todo o município e municípios circo vizinhos. Além desta festa centenária, temos ainda outras festas que arrastam povos de todos os lugares e da capital do Maranhão, o tão famoso Carnaval, onde o povo brinca nos blocos de rua, nas quatro noites de festa. Além de um povo hospitaleiro, amigo, e muito alegre, o povoado de Rabeca, tem muitos rios. O mais importante e mais antigo é o Rio de Monduril, onde o cuidado de todos é em prol de manter este rio como o ponto turístico do povoado. Trazendo pra ele, nos finais de semana, pessoas de vários municípios, e pessoas também do próprio município de Porto Rico."
      }];

      this.cateaua = [{
        "nome": "Cateaua",
        "msg": "O povoado de Cateaua fica aproximadamente a 9km do município de Porto Rico, antigamente era chamado pelo mais antigos de “Catiaua”, modificado pela nova geração para o que se chama hoje de “Cateaua”, nome supostamente de natureza indígena.A comunidade tem como padroeira Santa Luzia, santa protetora dos olhos, assim diz sua história pela religião católica. Cateaua tem como principal atração turística o atracadouro hidroviário conhecido pelo nome de “Ponte Flutuante”, que tem como principal objetivo a segurança no embarque e desembarque dos passeios náuticos. Portanto, trata-se de um povoado rio em cultura, tendo como principais eventos o festejo de Santa Luzia e o Carnaval que arrasta multidões todos os anos do município e regiões circo vizinhas."
      }];
      this.rioGrande = [{
        "nome": "Rio Grande",
        "msg": "O povoado de Rio Grande localiza-se a 6 Km de Porto Rico, o seu nome referencia a sua grande quantidade de riquezas naturais, como rios e igapós. A comunidade é referenciada como sendo o ultimo povoado antes da sede municipal. O povoado tem como principal padroeira a imaculada Nossa Senhora da Conceição, no qual realiza-se grande festejo religioso que trás as novenas e procissões. Rio Grande Destaca-se também pelo grande Festejo de Santana realizado ao final do mês de Julho, com mais de 50 anos de tradição o festejo atrai multidões de todo estado. "
      }];
      this.sumauma = [{
        "nome": "Sumauma",
        "msg": "O povoado de Sumaúma vem se destacando no município de Porto Rico do Maranhão com suas potencialidades turísticas.O acesso leva 20 min de viagem da cidade ao povoado, equivalendo  a _ km. Ressaltando que não somente o rio vem sendo muito frequentado por banhistas locais e outros municípios próximos. Mais também, as manifestações culturais caracteriza - se por tradições carnavalescas que atraem multidões, e promovendo a integração com os costumes dessa comunidade."
      }];
      this.engenho=[{
        "nome": "Engenho do Lago",
        "msg": "A comunidade quilombola de Engenho do Lago fica a 10 Km de distancia da sede municipal de Porto Rico. O povoado é conhecido por sua principal economia que é a produção de Jussara e a produção de farinha de mandioca. Engenho tem como principal festejo o de São Benedito, que é um santo milagreiro protetor dos negros e do tambor de crioula, realizado no ultimo domingo do mês de setembro. Esse lindo povoado tem como principal atração turística riachos e grandes sítios que atraem muitos turistas. "
      }];
      this.santaMaria=[{
        "nome": "Santa Maria",
        "msg": "A comunidade quilombola de Santa Maria encontra-se a 17 km de Porto Rico, localizando-o ao leste. Santa Maria tem uma enorme contribuição no cenário econômico e politico no município, és um grande município que tem como renda a pesca e a produção agrícola do município e sua participação politica por ter gerado o primeiro prefeito municipal, o advogado Luis Henrique Diniz Fonseca que governou o município nos 8 primeiros anos de emancipação politica do município, Santa Maria destaca-se por ter gerado uma deputada de vários mandatos com o nome de Maria da Graça Fonseca Paz (conhecida como Graça Paz). O povoado tem como destaque por ser uma comunidade quilombola e por ser rodeado de belíssimos balneários. A imaculada Conceição é a padroeira da comunidade, no qual realiza-se o seu festejo com novenas e finalizando-o com procissões. "
      }];
      this.remanso=[{
        "nome": "Remanso",
        "msg": "Remanso, é um dos terceiros povoados com mais habitantes do município de Porto Rico do Maranhão, percebe- se que ainda é pouco desenvolvido. Entretanto, as pessoas frequentam os barzinhos e a quadra esportiva que os jovens praticam esporte diurno ou noturno. O povoado tem vários rios , devido a falta de cuidado da população  ficaram impróprio para banhos e mergulhos. Porém, tem um riacho que é considerado o melhor dessa área, bem límpido e com temperatura ambiente. Em relação, aos traços culturais é predominante os blocos de rua no carnaval que arrasta muitos foliões."
      }]
      this.povoados = [
      {
        "nome": "Rabeca",
        "img": "/assets/icon/img/comunidades/rabeca.jpg",
        "msg": "",
      },
      {
        "nome": "Cateaua",
        "img": "/assets/icon/img/comunidades/cateaua.jpg",
        "msg": "",
      },
      {
        "nome": "Rio Grande",
        "img": "/assets/icon/img/comunidades/riogrande.jpg",
        "msg": "",
      },
      {
        "nome": "Sumauma",
        "img": "/assets/icon/img/comunidades/sumauma.jpg",
        "msg": "",
      },
      {
        "nome": "Santa Maria",
        "img": "/assets/icon/img/comunidades/santamaria.jpg",
        "msg": "",
      },
      {
        "nome": "Engenho do Lago",
        "img": "/assets/icon/img/comunidades/engenho.jpg",
        "msg": "",
      },
      {
        "nome": "Remanso",
        "img": "/assets/icon/img/comunidades/remanso/remanso (1).jpg",
        "msg": "",
      }
    ]
    this.img_rabeca = [{
      "img1": ["/assets/icon/img/comunidades/rabeca/aerea.jpg"],
      "img2": ["/assets/icon/img/comunidades/rabeca/monduril.jpg"],
      "img3": ["/assets/icon/img/comunidades/rabeca/rioverde.jpg"],
      "img4": ["/assets/icon/img/comunidades/rabeca/carnaval.jpg"],
      "img5": ["/assets/icon/img/comunidades/rabeca/calçadao.jpg"],
    }];
    this.img_cateaua = [{
      "img1": ["/assets/icon/img/comunidades/cateaua/aerea.jpg"],
      "img2": ["/assets/icon/img/comunidades/cateaua/rioengole.jpg"],
      "img3": ["/assets/icon/img/comunidades/cateaua/santa.jpg"],
      "img4": ["/assets/icon/img/comunidades/cateaua/porto.jpg"],
      "img5": ["/assets/icon/img/comunidades/cateaua/rua.jpg"],
    }];
    this.img_rioGrande = [{
      "img1": ["/assets/icon/img/comunidades/riogrande/loterio.jpeg"],
      "img2": ["/assets/icon/img/comunidades/riogrande/rio.jpg"],
      "img3": ["/assets/icon/img/comunidades/riogrande/festejodesantana.jpg"],
      "img4": ["/assets/icon/img/comunidades/riogrande/riogrande.jpg"],
      "img5": ["/assets/icon/img/comunidades/riogrande/riogrande_avenida.jpg"],
    }];
    this.img_sumauma =[{
      "img1": ["/assets/icon/img/comunidades/sumauma/sumauma_paisagem.jpg"],
      "img2": ["/assets/icon/img/comunidades/sumauma/sumauma_balanco.jpg"],
      "img3": ["/assets/icon/img/comunidades/sumauma/sumauma_buriti.jpg"],
      "img4": ["/assets/icon/img/comunidades/sumauma/sumauma_povo_agua.jpg"],
      "img5": ["/assets/icon/img/comunidades/sumauma/sumauma_agua.jpg"],
    }];
    this.img_engenho = [{
      "img1": ["/assets/icon/img/comunidades/sumauma/sumauma_paisagem.jpg"],
      "img2": ["/assets/icon/img/comunidades/sumauma/sumauma_balanco.jpg"],
      "img3": ["/assets/icon/img/comunidades/sumauma/sumauma_buriti.jpg"],
      "img4": ["/assets/icon/img/comunidades/sumauma/sumauma_povo_agua.jpg"],
      "img5": ["/assets/icon/img/comunidades/sumauma/sumauma_agua.jpg"],
    }];
    this.img_santaMaria = [{
      "img1": ["/assets/icon/img/comunidades/santamaria/santamaria.jpg"],
      "img2": ["/assets/icon/img/comunidades/santamaria/santamaria2.jpg"],
      "img3": ["/assets/icon/img/comunidades/santamaria/santamaria_paisagem.jpg"],
      "img4": ["/assets/icon/img/comunidades/santamaria/santamaria_homem.jpg"],
      "img5": ["/assets/icon/img/comunidades/santamaria/santamaria_rio.jpg"],
    }];
    this.img_remanso =[{
      "img1": ["/assets/icon/img/comunidades/remanso/remanso (1).jpg"],
      "img2": ["/assets/icon/img/comunidades/remanso/remanso (2).jpg"],
      "img3": ["/assets/icon/img/comunidades/remanso/remanso (3).jpg"],
      "img4": ["/assets/icon/img/comunidades/remanso/remanso (4).jpg"],
      "img5": ["/assets/icon/img/comunidades/remanso/remanso (5).jpg"],
    }]

};




  ngOnInit() {}
  public abrirDetalhes(nome){
    if(nome == "Rabeca"){
      this.modalRabeca()
    };
    if(nome == "Cateaua"){
      this.modalCateaua()
    };
    if(nome == "Rio Grande"){
      this.modalRioGrande()
    };
    if(nome == "Sumauma"){
      this.modalSumauma()
    };
    if(nome == "Santa Maria"){
      this.modalSantaMaria()
    };
    if(nome == "Engenho do Lago"){
      this.modalEngenho()
    };
    if(nome == "Remanso"){
      this.modalRemanso()
    }
    return false;
  }


  async modalRabeca(){
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        povoadoModal: this.rabeca,
        imagemPovoado: this.img_rabeca


      }
    })

     await modal.present();
  }
  async modalCateaua(){
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        povoadoModal: this.cateaua,
        imagemPovoado: this.img_cateaua


      }
    })

     await modal.present();
  }
  async modalRioGrande(){
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        povoadoModal: this.rioGrande,
        imagemPovoado: this.img_rioGrande

      }
    })

     await modal.present();
  }
  async modalSumauma(){
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        povoadoModal: this.sumauma,
        imagemPovoado: this.img_sumauma

      }
    })

     await modal.present();
  }
  async modalSantaMaria(){
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        povoadoModal: this.santaMaria,
        imagemPovoado: this.img_santaMaria

      }
    })

     await modal.present();
  }
  async modalEngenho(){
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        povoadoModal: this.engenho,
        imagemPovoado: this.img_engenho

      }
    })

     await modal.present();
  }
  async modalRemanso(){
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        povoadoModal: this.remanso,
        imagemPovoado: this.img_remanso

      }
    })

     await modal.present();
  }

}

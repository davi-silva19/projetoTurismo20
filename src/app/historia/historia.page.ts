import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.page.html',
  styleUrls: ['./historia.page.scss'],
})
export class HistoriaPage implements OnInit {
  public imagens: Array<object>=[{
    "img1": "/assets/icon/img/pturisticos/logo.jpg",
    "img2": "/assets/icon/img/pturisticos/brasilia.jpg",
    "img3": "/assets/icon/img/pturisticos/rampa.jpg",
    "img4": "/assets/icon/img/pturisticos/slide/49Porto Rico Noturna Drn.JPG",
    "img5": "/assets/icon/img/pturisticos/portal.jpg",
  }]
  constructor() {
    this.imagens;
  }

  ngOnInit() {
  }

}

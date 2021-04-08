import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-p-turistico',
  templateUrl: './p-turistico.component.html',
  styleUrls: ['./p-turistico.component.scss']
})
export class PTuristicoComponent implements OnInit {
@Input() igrejaModal: any[];
@Input() titulo: any;
@Input() rioModal: any[];
@Input() outrosModal: any[];
@Input() igrejasModal: any[];
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  _dismiss(){
    this.modalCtrl.dismiss();
}
}

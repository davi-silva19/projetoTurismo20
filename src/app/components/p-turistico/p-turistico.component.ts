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
@Input() localiza_rioverde: any[];
@Input() localiza_monduril: any[];
@Input() localiza_fonteGrande: any[];
@Input() localiza_pedreira: any[];
@Input() localiza_atracadouro: any[];
@Input() localiza_remediosModal: any[];
@Input() localiza_assembleia: any[];
@Input() pracaModal: any[];
@Input() localiza_pracaBetel: any[];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  _dismiss(){
    this.modalCtrl.dismiss();
}
}

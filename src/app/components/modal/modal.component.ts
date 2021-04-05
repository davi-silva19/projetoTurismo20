import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() cardapioModal: any[];
  @Input() tituloModal: any[];
  @Input() povoadoModal: any[];
  @Input() imagemPovoado: any[];
  
  
 
 
  
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

_dismiss(){
    this.modalCtrl.dismiss();
}
}

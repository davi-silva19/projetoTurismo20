import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-rota',
  templateUrl: './rota.page.html',
  styleUrls: ['./rota.page.scss'],
})
export class RotaPage implements OnInit {
  map: google.maps.Map;
  minhaPosicao: any;
 
  public destination : any;




  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  constructor(private geolocation: Geolocation) { }
  
  ionViewWillEnter(){
   this.exibirMapa();
  }

  exibirMapa(){
    const position = new google.maps.LatLng(-1.860231, -44.584784);
    const opcoes = {
      center: position,
      zoom: 15,
      disableDefault: true
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement, opcoes)
    this.buscarPosicao();
   
    
  }
 buscarPosicao(){
  
  let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
          this.minhaPosicao = {
            lat: data.coords.latitude,
            lng: data.coords.longitude
        };
        });
  this.irParaMinhaPosicao();
  
        
   
  }
  irParaMinhaPosicao(){
    this.map.setCenter(this.minhaPosicao);
    this.map.setZoom(15);

    
    
  }
 

  public tracarRota(local: any){
   
  }


  ngOnInit() {
  }

}

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
  minhaPosicao: google.maps.LatLng;
  enderecoDestino: google.maps.LatLng;
  private autoComplete = new google.maps.places.AutocompleteService();
  private direction= new google.maps.DirectionsService;
  private directionsRender = new google.maps.DirectionsRenderer;



  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  constructor(private geolocation: Geolocation) { }

  ionViewWillEnter(){
   this.exibirMapa();
  }

  exibirMapa(){
    const position = new google.maps.LatLng(-1.859771, -44.584203);
    const opcoes = {
      center: position,
      zoom: 1,
      disableDefault: true
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement, opcoes)
    this.buscarPosicao();
    this.buscarEndereco();
    this.tracarRota();

  }


 buscarPosicao(){
  this.geolocation.getCurrentPosition().then((resp) => {
    // resp.coords.latitude
    // resp.coords.longitude

    this.minhaPosicao = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
    this.irParaMinhaPosicao();
   }).catch((error) => {
     console.log('Error getting location', error);
   });
  }

  irParaMinhaPosicao(){
    this.map.setCenter(this.minhaPosicao);
    this.map.setZoom(15);

    const marker = new google.maps.Marker({
      position: this.minhaPosicao,
      title: 'Minha Posição',
      animation: google.maps.Animation.DROP,
      map: this.map
    })
  }
  buscarEndereco(){
    this.enderecoDestino = new google.maps.LatLng(-1.859932, -44.584246)

    const marker = new google.maps.Marker({
      position: this.enderecoDestino,
      title: 'Destino',
      animation: google.maps.Animation.BOUNCE,
      map: this.map
    })
  }


  public tracarRota(){
    new google.maps.Geocoder().geocode({location: this.enderecoDestino}, resultado =>{
      const rota: google.maps.DirectionsRequest ={
        origin: this.minhaPosicao,
        destination: this.enderecoDestino,
        unitSystem: google.maps.UnitSystem.METRIC,
        travelMode: google.maps.TravelMode.DRIVING
      }
      this.direction.route(rota, (resultado, status)=>{

          this.directionsRender.setMap(this.map);
          this.directionsRender.setDirections(resultado);

      })
    })

  }


  ngOnInit() {
  }

}

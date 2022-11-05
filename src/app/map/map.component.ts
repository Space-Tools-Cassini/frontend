import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  private map : any;
  selection: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 41.274689, 1.987149 ],
      zoom: 6
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    })

    tiles.addTo(this.map);
    this.selection = new L.Marker([ 41.274689, 1.987149 ]).addTo(this.map);
  }

  private selectLocation () {

    this.map.on('click', (e: { latlng: any;}) => {
      var mps;
      var coord= e.latlng;
      var lat = coord.lat;
      var lng = coord.lng;
      console.log('Tengo una latitud de: ' +lat+ ' y una longitud de: '+ lng);
      var newLatLng = new L.LatLng(lat,lng);
      this.selection.setLatLng(newLatLng);
    });
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
    this.selectLocation();
  }

}

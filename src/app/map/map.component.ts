import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map:any;
  private selection: any;
  subscription: any;

  constructor() {
   }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 41.38493211800988, 2.117266464856067 ],
      zoom: 6
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    this.selection = new L.Marker([41.38493211800988, 2.117266464856067]).addTo(this.map);
  }
  private selectLocation() {

    this.map.on('click', (e: { latlng: any; }) => {
      var mps;
        var coord = e.latlng;
        var lat = coord.lat;
        var lng = coord.lng;
        console.log('Tengo una latitud de: ' + lat + ' y una longitud de: ' + lng);
        var newLatLng = new L.LatLng(lat,lng);
        this.selection.setLatLng(newLatLng);
        // var mp = new L.Marker([lat, lng]).addTo(this.map);
        // alert(mp.getLatLng());
    });
}
  private putLocation(entry : any) {
    var lat = entry.latitude;
    var lng = entry.longitude;
    var newLatLng = new L.LatLng(lat,lng);
    this.selection.setLatLng(newLatLng)

  }

  ngAfterViewInit(): void {
    this.initMap();
    this.selectLocation();
  }
}

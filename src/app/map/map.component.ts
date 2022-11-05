import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import * as L from 'leaflet';
import { Entry } from '../entry';
import { InputService } from '../input.service';

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
  _entry = new Entry(41.275151, 1.986382)
  private selection: any;
  is: InputService;
  subscription: any;

  constructor(is: InputService) {
    this.is = is;
   }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ this._entry.latitude, this._entry.longitude ],
      zoom: 11
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    this.selection = new L.Marker([this._entry.latitude, this._entry.longitude]).addTo(this.map);
  }
  private selectLocation() {

    this.map.on('click', (e: { latlng: any; }) => {
      var mps;
        var coord = e.latlng;
        var lat = coord.lat;
        var lng = coord.lng;
        console.log('Tengo una latitud de: ' + lat + ' y una longitud de: ' + lng);
        this.is.updateLatLng(lat, lng);
        var newLatLng = new L.LatLng(lat,lng);
        this.selection.setLatLng(newLatLng);
    });
}
  private putLocation(entry : any) {
    var lat = entry.latitude;
    var lng = entry.longitude;
    var newLatLng = new L.LatLng(lat,lng);
    this.selection.setLatLng(newLatLng)

  }

  upload() {
    alert("Ahora se envíarian las coordenadas (latitud: "+this._entry.latitude+", longitud: "+this._entry.longitude+".");
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.selectLocation();
    this.subscription = this.is.getEmittedValue()
    .subscribe(item => this._entry = item);
  }

  get latitude(): number {
    return this._entry.latitude;
  }
  set latitude(newLatitude: number) {
    console.log(newLatitude);
    this.is.updateLat(newLatitude);
  }

  get longitude(): number {
    return this._entry.longitude;
  }
  set longitude(newLongitude: number) {
    console.log(newLongitude);
    this.is.updateLat(newLongitude);
  }
}

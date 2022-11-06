import { Injectable, Output, EventEmitter } from '@angular/core';
import { Entry } from './entry';

@Injectable({
  providedIn: 'root'
})
export class InputService {
  entry = {} as Entry;
  @Output() fire: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log("Servicio started");
  }

  updateLat(lat: number) {
    this.entry.latitude= lat;
    console.log('Latitude updated, current coordinates: '+this.entry.latitude+', '+this.entry.latitude);
    this.fire.emit(this.entry);
  }
  updateLng(lng: number) {
    this.entry.longitude = lng;
    console.log('Longitude updated, current coordinates: '+this.entry.longitude+', '+this.entry.latitude);
    this.fire.emit(this.entry);
  }

  updateLatLng(lat: number, lng: number) {
    this.entry.latitude = lat;
    this.entry.longitude = lng;
    console.log('Coordinates uploaded, new latitude: '+this.entry.latitude+', new longitude: '+this.entry.longitude);
    this.fire.emit(this.entry);
  }
  getEmittedValue() {
    return this.fire;
  }
}

import { Crop } from "./shared/models/crop.model";

export class Entry {

  public latitude: number;
  public longitude: number;
  public temp: number;
  public rainfall: number;
  public ph: number;
  public score: number;
  public soilType: number;

  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }


}

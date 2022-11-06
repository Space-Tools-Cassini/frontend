import { Component, OnInit } from '@angular/core';
import { Cwheat } from '../shared/models/cwheat.model';
import { Maize } from '../shared/models/maize.model';
import { Rice } from '../shared/models/rice.model';
import { Soybean } from '../shared/models/soybean.model';
import { Logic } from '../shared/utils/logic.model';
import { InputService } from '../input.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  ty  = [ "Clay", "Silt", "Sand", "Peaty", "Chalky", "Loamy"];
  is: any;
  input: any;
  score: number;
  temp: number;
  rain: number;
  ph: number;
  soil: any;
  constructor(is: InputService) {

    this.is = is
    this.input = is.pushValues();

  }

  ngOnInit(): void {
    this.score = this.input.score.toFixed(2);
    this.temp  = this.input.temp.toFixed(2);
    this.rain = this.input.rainfall.toFixed(2);
    this.ph = this.input.ph.toFixed(2);
    this.soil = this.ty[Math.floor(Math.random() * (6))];
  }

}

import { Component, OnInit } from '@angular/core';
import { Cwheat } from '../shared/models/cwheat.model';
import { Maize } from '../shared/models/maize.model';
import { Rice } from '../shared/models/rice.model';
import { Soybean } from '../shared/models/soybean.model';
import { Logic } from '../shared/utils/logic.model';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(Logic.analize(Math.floor(Math.random()*(90 +90 +1)-90), Math.floor(Math.random()*(180 +1)), new Cwheat()));
  }

}

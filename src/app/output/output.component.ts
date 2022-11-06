import { Component, OnInit } from '@angular/core';
import { Cwheat } from '../shared/models/cwheat.model';
import { Maize } from '../shared/models/maize.model';
import { Rice } from '../shared/models/rice.model';
import { Logic } from '../shared/utils/logic.model';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(Logic.analize(0, 0, new Maize()));
  }

}

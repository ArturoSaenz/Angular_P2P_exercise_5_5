import { Component, OnInit } from '@angular/core';
import { StateService } from './../state.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private _values: string[][];
  private _stateService : StateService;

  constructor(stateService:StateService, StateService:StateService ) {
    this._values = stateService.state.values;
    this._stateService = StateService;
   }

  ngOnInit() {
  }

}

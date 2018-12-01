import { Component, OnInit } from '@angular/core';
import { StateService } from './../state.service';

@Component({
  selector: 'app-resetbutton',
  templateUrl: './resetbutton.component.html',
  styleUrls: ['./resetbutton.component.css']
})
export class ResetbuttonComponent implements OnInit {

  private _stateService:StateService;
  
    constructor(stateService:StateService) { 
      this._stateService = stateService;
    }

  ngOnInit() {
  }
  _handleResetClick(){
    console.log("Reset clicked");
    this._stateService.reset();
  }
}

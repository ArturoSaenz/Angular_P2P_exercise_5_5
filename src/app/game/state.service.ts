import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface State {
    turn: string,
    counter: number,
    values: string[][]
}

@Injectable({
  providedIn: 'root'
})
export class StateService {

	private _state$: BehaviorSubject<State>;

  constructor() { 

	  let initialState = {
      turn: 'PLAYER X',
      counter: 0,
	    values: [
	      ['-','-','-'],
	      ['-','-','-'],
	      ['-','-','-']
	    ]
	  };

	  this._state$ = new BehaviorSubject(initialState);

  }

  get state$ (): BehaviorSubject<State> {
    return this._state$; 
  }

  get state (): State {
    return this._state$.getValue();
  }

  set state (state: State) {
    this._state$.next(state);
  }
  
  updateValue(row, col) {
    if(this.state.values[row][col] === '-') {
      let newValue = this.state.turn === 'PLAYER X' ? 'X' : '0';
      let newTurn = this.state.turn === 'PLAYER X' ? 'PLAYER 0' : 'PLAYER X';
      let counter = this.state.counter ++ ;
      this.state.values[row][col] = newValue;
      this.state.turn = newTurn;
      this._state$.next(this.state);
    }
  }

  
  reset() {
    this.state = {
      turn: 'PLAYER X',
      counter: 0,
      values: [
        ['-','-','-'],
        ['-','-','-'],
        ['-','-','-']
      ]
    };
  }

}

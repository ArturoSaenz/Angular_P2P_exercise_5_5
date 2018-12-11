import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface State {
    turn: string,
    counter: number,
    iswinner : boolean,
    iswinnerO : boolean,
    winner: string,
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
      iswinner : false,
      iswinnerO : false,
      winner: 'DRAW',
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

  checkwinner(row,col){
    if (this.state.values[row][col] !== '-'){
      console.log("Estado del tablero",this.state.values);
    }
    if ((this.state.values[row][col] === 'X' && 
        this.state.values[row][0] === 'X' &&
        this.state.values[row][1] === 'X' &&
        this.state.values[row][2] === 'X')
        ||
        (this.state.values[row][col] === 'X' && 
        this.state.values[0][col] === 'X' &&
        this.state.values[1][col] === 'X' &&
        this.state.values[2][col] === 'X')
        ||
        (this.state.values[row][col] === 'X' && 
        this.state.values[0][0] === 'X' &&
        this.state.values[1][1] === 'X' &&
        this.state.values[2][2] === 'X')
        ||
        (this.state.values[row][col] === 'X' && 
        this.state.values[0][2] === 'X' &&
        this.state.values[1][1] === 'X' &&
        this.state.values[2][0] === 'X')
      )
        {
          console.log("Estado del tablero",this.state.values);
          console.log("Player X won");
          let newTurn = this.state.turn === 'PLAYER X' ? 'PLAYER X WON' : 'PLAYER O WON';
          this.state.winner = 'There is a winner, Player 1 - Xs';
          console.log(this.state.winner);
          this.state.turn = '';
          this.state.iswinner = true;
          console.log("iswinner",this.state.iswinner);
        }

        if ((this.state.values[row][col] === '0' && 
          this.state.values[row][0] === '0' &&
          this.state.values[row][1] === '0' &&
          this.state.values[row][2] === '0')
          ||
          (this.state.values[row][col] === '0' && 
          this.state.values[0][col] === '0' &&
          this.state.values[1][col] === '0' &&
          this.state.values[2][col] === '0')
          ||
          (this.state.values[row][col] === '0' && 
          this.state.values[0][0] === '0' &&
          this.state.values[1][1] === '0' &&
          this.state.values[2][2] === '0')
          ||
          (this.state.values[row][col] === '0' && 
          this.state.values[0][2] === '0' &&
          this.state.values[1][1] === '0' &&
          this.state.values[2][0] === '0')
        )
          {
            console.log("Estado del tablero",this.state.values);
            console.log("Player O won");
            let newTurn = this.state.turn === 'PLAYER O' ? 'PLAYER O WON' : 'PLAYER X WON';
            this.state.winner = 'There is a winner, Player 2 - Os';
            console.log(this.state.winner);
            this.state.turn = '';
            this.state.iswinnerO = true;
            console.log("iswinnerO",this.state.iswinnerO);
          }
  }
  
  reset() {
    this.state = {
      turn: 'PLAYER X',
      winner: 'DRAW',
      iswinner : false,
      iswinnerO : false,
      counter: 0,
      values: [
        ['-','-','-'],
        ['-','-','-'],
        ['-','-','-']
      ]
    };
  }

}

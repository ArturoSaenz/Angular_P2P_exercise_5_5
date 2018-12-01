import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { HeaderComponent } from './header/header.component';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';
import { StateService } from './state.service';
import { ResetbuttonComponent } from './resetbutton/resetbutton.component';

@NgModule({
  declarations: [GameComponent, HeaderComponent, BoardComponent, SquareComponent, ResetbuttonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GameComponent
  ],
  providers: [StateService]
})
export class GameModule { }

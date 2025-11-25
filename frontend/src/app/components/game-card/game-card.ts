import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Game} from '../../interfaces/IGame';

@Component({
	selector: 'app-game-card',
	imports: [],
	templateUrl: './game-card.html',
	styleUrl: './game-card.scss',
})
export class GameCard {
	@Input() game!: Game;
	@Output() playClick = new EventEmitter<void>();
	@Output() infoClick = new EventEmitter<void>();
}

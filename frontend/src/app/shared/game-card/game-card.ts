import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Game} from "../../util";

@Component({
	selector: 'app-game-card',
	imports: [],
	templateUrl: './game-card.html',
	styleUrl: './game-card.scss',
})
export class GameCard {
	@Input() game!: Game;
	@Input() imageLoaded = false;
	@Output() playClick = new EventEmitter<void>();
	@Output() infoClick = new EventEmitter<void>();

	onImageLoad(): void {
		this.imageLoaded = true;
	}
}

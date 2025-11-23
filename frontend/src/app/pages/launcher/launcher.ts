import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Game} from '../../util'
import {GameCard} from "../../shared/game-card/game-card";
import {CommonModule} from "@angular/common";
import {GameService} from '../../services/game/game';

@Component({
	selector: 'app-launcher',
	imports: [
        GameCard
	],
	templateUrl: './launcher.html',
	styleUrl: './launcher.scss',
})
export class Launcher {

	public gameService = inject(GameService);

	@Input() selectedGame!: Game | null;
	@Input() viewingGameDetail = false;
	@Input() imageLoaded!: Record<string, boolean>;

	@Output() playClick = new EventEmitter<Game>();
	@Output() infoClick = new EventEmitter<Game>();
	@Output() backClick = new EventEmitter<void>();
}
